'use client'
import { useMemo, useState } from 'react'
import { useStore } from '@/store/useStore'
import { QUIZ_POOL, type QuizQ } from '@/data/dashboard'
import { addXP, awardBadge, recordQuizResult } from '@/lib/db'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function pickQuestions(): QuizQ[] {
  return shuffle(QUIZ_POOL).slice(0, 10).map(q => {
    const idx = shuffle([0, 1, 2, 3])
    return { q: q.q, a: idx.map(i => q.a[i]), ok: idx.indexOf(q.ok), e: q.e }
  })
}

export default function Quiz() {
  const user = useStore(s => s.user)!
  const patchUser = useStore(s => s.patchUser)
  const [questions, setQuestions] = useState<QuizQ[] | null>(null)
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const start = () => {
    setQuestions(pickQuestions())
    setI(0); setPicked(null); setScore(0); setDone(false)
  }

  const answer = async (n: number) => {
    if (picked !== null || !questions) return
    setPicked(n)
    if (n === questions[i].ok) {
      setScore(s => s + 1)
      const { xp, niveau } = await addXP(user.uid, 10, user.xp)
      patchUser({ xp, niveau })
    }
  }

  const next = async () => {
    if (!questions) return
    if (i < questions.length - 1) {
      setI(i + 1); setPicked(null)
    } else {
      setDone(true)
      await recordQuizResult(user.uid, score, questions.length)
      if (score === questions.length && !user.badges.includes('perfect')) {
        await awardBadge(user.uid, 'perfect')
        const { xp, niveau } = await addXP(user.uid, 20, user.xp)
        patchUser({ xp, niveau, badges: [...user.badges, 'perfect'] })
      }
    }
  }

  if (!questions) {
    return (
      <div className="db-page">
        <h1 className="db-h1">Quiz Bénin</h1>
        <p className="db-sub">10 questions · +10 XP par bonne réponse · +20 XP bonus si parfait.</p>
        <button className="db-btn" onClick={start}>Commencer →</button>
      </div>
    )
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const tier = pct === 100 ? '🏆 Parfait !' : pct >= 70 ? '🎉 Excellent' : pct >= 40 ? '👍 Pas mal' : '📚 À réviser'
    return (
      <div className="db-page">
        <h1 className="db-h1">{tier}</h1>
        <div className="db-score">{score} / {questions.length}</div>
        <p className="db-sub">+{score * 10}{score === questions.length ? ' (+20 bonus)' : ''} XP gagnés</p>
        <button className="db-btn" onClick={start}>Rejouer</button>
      </div>
    )
  }

  const q = questions[i]
  return (
    <div className="db-page">
      <div className="db-qz-head">Question {i + 1} / {questions.length} · Score : {score}</div>
      <h2 className="db-qz-q">{q.q}</h2>
      <div className="db-qz-answers">
        {q.a.map((ans, n) => {
          let cls = 'db-qz-a'
          if (picked !== null) {
            if (n === q.ok) cls += ' ok'
            else if (n === picked) cls += ' ko'
          }
          return (
            <button key={n} className={cls} onClick={() => answer(n)} disabled={picked !== null}>
              {ans}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <>
          <div className="db-qz-expl">{q.e}</div>
          <button className="db-btn" onClick={next}>{i < questions.length - 1 ? 'Suivant →' : 'Voir le score'}</button>
        </>
      )}
    </div>
  )
}
