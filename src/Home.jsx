import { Link } from 'react-router-dom'
import Desktop, { Window } from './Desktop.jsx'

const LINKEDIN = 'https://www.linkedin.com/in/aronnya-pal/'

const icons = [
  ['/#home', 'pc', 'Home'],
  ['/#work', 'doc', 'work.txt'],
  ['/#invention', 'wave', 'Invention'],
  ['/#projects', 'folder', 'Projects'],
  ['/#contact', 'mail', 'Contact'],
]
const tasks = [
  ['/#work', 'work.txt'],
  ['/#invention', 'invention.idf'],
  ['/#projects', 'C:\\Projects'],
  ['/#contact', 'Contact'],
]

export default function Home() {
  return (
    <Desktop title="Aronnya Pal" welcome icons={icons} tasks={tasks}>
      <Window id="home" title="aronnya.exe" size="big">
        <h1>Aronnya Pal</h1>
        <p>Computer science student at VIT Vellore. I work across AI/ML, data and design.</p>
        <p><Link className="btn hot" to="/#projects">Projects</Link> <a className="btn" href={LINKEDIN} rel="noopener">LinkedIn</a></p>
      </Window>

      <Window id="about" title="about.txt" i={1}>
        <div className="term">
          <p>&gt; <b>whoami</b><br />BTech CS, VIT Vellore, 2027<br />Kolkata, India</p>
          <p>&gt; <b>likes</b><br />design, gaming hardware,<br />mechanical keyboards</p>
          <p>&gt; <b>audiophile</b><br />yes. hi-fi audio and<br />in-ear monitors</p>
          <p>&gt; <span className="blink">_</span></p>
        </div>
      </Window>

      <Window id="work" title="work.txt" size="big" i={2}>
        <ul className="list">
          <li><b>TCS</b><small>2026</small><span>BI development intern. Sales analytics on GCP and BigQuery.</span></li>
          <li><b>National University of Singapore</b><small>2025</small><span>Generative AI intern. Built a sketch-to-face image generator.</span></li>
          <li><b>Deloitte Australia</b><small>2026</small><span>Data analytics job simulation on Forage.</span></li>
          <li><b>VIT Technology and Gaming Club</b><small>2024 - now</small><span>Design Head for a 600+ member community.</span></li>
        </ul>
      </Window>

      <Window id="invention" title="invention.idf" i={3}>
        <h2>Earphones matched to your music</h2>
        <p>An invention disclosure at VIT: a method that picks in-ear monitors by comparing their measured frequency response with the spectrum of a listener's own library.</p>
        <dl className="stats">
          <div><dt>earphones</dt><dd>3,680</dd></div>
          <div><dt>measurements</dt><dd>4,940</dd></div>
        </dl>
        <p style={{ marginTop: '1rem' }}><Link className="btn hot" to="/invention">Read more</Link></p>
      </Window>

      <Window id="projects" title="C:\Projects" size="wide" i={4}>
        <ul className="list">
          <li><b>Timbre</b><small>FastAPI / Next.js / PySpark</small><span>An earphone buying guide. Take a short sound quiz or paste a playlist, set a budget, and it recommends in-ear monitors from their measured frequency response, with review snippets and a check on whether your phone can drive them. It is the prototype for <Link to="/invention">the invention</Link>.</span></li>
          <li><b>SoilPal</b><small>Python</small><span>Soil health and pollution screening for any coordinate. It pulls soil-map and weather data, scores the soil on a health index, and suggests suitable crops on a dashboard. Built around the red and black soils near Vellore.</span></li>
          <li><b>ProTeam Analytics</b><small>Node.js</small><span>A VALORANT stats tracker for a team. Look up any player by Riot ID and see live match stats through a small backend over a community API.</span></li>
          <li><b>Borb</b><small>Python / TFLite</small><span>A bird detector. It listens to a microphone, identifies the species with a TensorFlow Lite model, and logs each detection to a local web page.</span></li>
        </ul>
      </Window>

      <Window id="contact" title="Contact" size="wide" i={5}>
        <p>Open to AI/ML and cybersecurity roles.</p>
        <p><a className="btn hot" href="mailto:palaronnya@gmail.com">Email</a> <a className="btn" href={LINKEDIN} rel="noopener">LinkedIn</a></p>
        <ul className="tags"><li>Python</li><li>C++</li><li>Java</li><li>React</li><li>GCP</li><li>BigQuery</li><li>Tableau</li><li>Figma</li></ul>
      </Window>
    </Desktop>
  )
}
