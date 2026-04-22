'use client'
import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import { createPost, listPosts, togglePostLike, type Post } from '@/lib/db'

export default function Communaute() {
  const user = useStore(s => s.user)!
  const [posts, setPosts] = useState<Post[]>([])
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)

  const load = async () => setPosts(await listPosts())

  useEffect(() => { load() }, [])

  const publish = async () => {
    if (!text.trim()) return
    setBusy(true)
    try {
      await createPost({
        uid: user.uid,
        author: `${user.prenom} ${user.nom.charAt(0)}.`,
        avatar: user.prenom.charAt(0).toUpperCase(),
        content: text.trim(),
      })
      setText('')
      await load()
    } finally { setBusy(false) }
  }

  const like = async (id: string) => {
    await togglePostLike(id, 1)
    setPosts(ps => ps.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p))
  }

  return (
    <div className="db-page">
      <h1 className="db-h1">Communauté</h1>
      <p className="db-sub">Partagez vos expériences, posez vos questions.</p>

      <div className="db-post-new">
        <textarea className="db-textarea" placeholder="Partagez quelque chose…" value={text} onChange={e => setText(e.target.value)} rows={3} />
        <button className="db-btn" onClick={publish} disabled={busy || !text.trim()}>{busy ? 'Publication…' : 'Publier'}</button>
      </div>

      <div className="db-posts">
        {posts.length === 0 && <div className="db-sub">Soyez le premier à publier.</div>}
        {posts.map(p => (
          <div key={p.id} className="db-post">
            <div className="db-post-head">
              <div className="db-avatar">{p.avatar}</div>
              <div className="db-post-author">{p.author}</div>
            </div>
            <div className="db-post-body">{p.content}</div>
            <button className="db-post-like" onClick={() => p.id && like(p.id)}>♥ {p.likes}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
