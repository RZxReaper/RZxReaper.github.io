import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Closed = createContext()

const ICONS = {
  pc: <><path fill="#14141d" stroke="#d6d6e4" d="M2.5 1.5h11v9h-11zM1.5 12.5h13v2h-13z" /><path fill="#ff69b4" d="M4 3h8v6H4z" /></>,
  folder: <path fill="#ccff00" stroke="#d6d6e4" d="M1.5 3.5h5l1 2h7v8h-13z" />,
  doc: <><path fill="#14141d" stroke="#d6d6e4" d="M3.5 1.5h6l3 3v10h-9z" /><path stroke="#00bfff" d="M5 7.5h6M5 9.5h6M5 11.5h4" /></>,
  wave: <><path fill="#14141d" stroke="#d6d6e4" d="M1.5 2.5h13v11h-13z" /><path fill="none" stroke="#ccff00" d="M3 10.5h2v-4h2v6h2v-8h2v5h2" /></>,
  mail: <><path fill="#14141d" stroke="#d6d6e4" d="M1.5 3.5h13v9h-13z" /><path fill="none" stroke="#ff69b4" d="M1.5 3.5l6.5 5 6.5-5" /></>,
}

function Welcome() {
  const ref = useRef()
  useEffect(() => {
    // once per session, not on every return to the desktop
    try {
      if (sessionStorage.welcomed) return
      sessionStorage.welcomed = 1
    } catch {}
    ref.current.showModal()
  }, [])
  return (
    <dialog ref={ref} aria-labelledby="welcome-t">
      <div className="title"><span id="welcome-t">PLAYER 1</span></div>
      <div className="body">
        <p>Welcome to Aronnya Pal's desktop.</p>
        <form method="dialog"><button autoFocus>Press Start</button></form>
      </div>
    </dialog>
  )
}

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(t)
  }, [])
  return <span className="clock">{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
}

export function Window({ id, title, size = '', i = 0, children }) {
  const [closed, setClosed] = useContext(Closed)
  if (closed.includes(id)) return null
  return (
    <section className={`window ${size}`} id={id} style={{ '--i': i }}>
      <div className="title">
        <span>{title}</span>
        <button aria-label="Close window" onClick={() => setClosed([...closed, id])}>x</button>
      </div>
      <div className="body">{children}</div>
    </section>
  )
}

// icons: [to, icon, label]; tasks: [to, label]
export default function Desktop({ title, welcome, icons, tasks, children }) {
  const [closed, setClosed] = useState([])
  const location = useLocation()
  const id = location.hash.slice(1)

  useEffect(() => { document.title = title }, [title])
  // any link to a window (desktop icon, taskbar) reopens it and scrolls to it
  useEffect(() => {
    setClosed(c => c.filter(x => x !== id))
    // after the reopened window has rendered
    setTimeout(() => id ? document.getElementById(id)?.scrollIntoView() : window.scrollTo(0, 0))
  }, [location])

  return (
    <Closed.Provider value={[closed, setClosed]}>
      {welcome && <Welcome />}
      <main className="desktop">
        <nav className="icons" aria-label="Desktop">
          {icons.map(([to, icon, label]) => (
            <Link key={to} to={to}>
              <svg viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true">{ICONS[icon]}</svg>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="windows">{children}</div>
      </main>
      <footer className="taskbar">
        <Link className="btn hot" to="/#home">Start</Link>
        <nav aria-label="Taskbar">
          {tasks.map(([to, label]) => <Link key={to} className="btn" to={to}>{label}</Link>)}
        </nav>
        <Clock />
      </footer>
    </Closed.Provider>
  )
}
