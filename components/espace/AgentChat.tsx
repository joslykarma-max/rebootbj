'use client'
import { useState, useRef, useEffect } from 'react'

type Persona = 'jojo' | 'nadi'
type Msg = { role: 'user' | 'assistant'; content: string }

const AGENTS = {
  jojo: { name: 'Jojo', role: 'Guide & conseiller', img: '/Destinations/jojo_profile.png' },
  nadi: { name: 'Nadi', role: 'Guide de l\'âme', img: '/Destinations/nadi.png' },
}

export default function AgentChat() {
  const [open, setOpen] = useState(false)
  const [persona, setPersona] = useState<Persona>('jojo')
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Reset messages when switching agent
  const switchAgent = (p: Persona) => {
    setPersona(p)
    setMessages([])
  }

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    const userMsg: Msg = { role: 'user', content: text }
    const newMsgs = [...messages, userMsg]
    setMessages(newMsgs)
    setLoading(true)
    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMsgs, persona }),
      })
      const data = await res.json()
      if (data.content) {
        setMessages(m => [...m, { role: 'assistant', content: data.content }])
      }
    } catch {
      setMessages(m => [...m, { role: 'assistant', content: 'Désolé, une erreur s\'est produite. Réessaie dans un instant.' }])
    } finally {
      setLoading(false)
    }
  }

  const agent = AGENTS[persona]

  return (
    <>
      {/* Floating button */}
      <button className="ac-fab" onClick={() => setOpen(v => !v)} aria-label="Parler à un agent">
        {open ? '✕' : (
          <img src={AGENTS[persona].img} alt={AGENTS[persona].name} className="ac-fab-img" />
        )}
        {!open && <span className="ac-fab-label">Parler à un agent IA</span>}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="ac-panel">
          {/* Header */}
          <div className="ac-header">
            <div className="ac-agent-switch">
              {(Object.keys(AGENTS) as Persona[]).map(p => (
                <button
                  key={p}
                  className={`ac-agent-btn${persona === p ? ' active' : ''}`}
                  onClick={() => switchAgent(p)}
                >
                  <img src={AGENTS[p].img} alt={AGENTS[p].name} />
                  <span>{AGENTS[p].name}</span>
                </button>
              ))}
            </div>
            <div className="ac-agent-info">
              <strong>{agent.name}</strong>
              <span>{agent.role}</span>
            </div>
          </div>

          {/* Messages */}
          <div className="ac-messages">
            {messages.length === 0 && (
              <div className="ac-empty">
                <img src={agent.img} alt={agent.name} className="ac-empty-avatar" />
                <p>Bonjour ! Je suis <strong>{agent.name}</strong>.<br />
                  Dis-moi ce que tu cherches comme expérience au Bénin — je t'aide à trouver la destination qui te correspond.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`ac-msg${m.role === 'user' ? ' ac-msg-user' : ' ac-msg-agent'}`}>
                {m.role === 'assistant' && (
                  <img src={agent.img} alt={agent.name} className="ac-msg-avatar" />
                )}
                <div className="ac-msg-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="ac-msg ac-msg-agent">
                <img src={agent.img} alt={agent.name} className="ac-msg-avatar" />
                <div className="ac-msg-bubble ac-typing"><span /><span /><span /></div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="ac-input-row">
            <input
              className="ac-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder={`Écrire à ${agent.name}…`}
              disabled={loading}
            />
            <button className="ac-send" onClick={send} disabled={loading || !input.trim()}>
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
