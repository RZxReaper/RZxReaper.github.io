import { Link } from 'react-router-dom'
import Desktop, { Window } from './Desktop.jsx'

const icons = [
  ['/', 'pc', 'Home'],
  ['/#projects', 'folder', 'Projects'],
  ['/#contact', 'mail', 'Contact'],
]
const tasks = [
  ['/invention#problem', 'problem.txt'],
  ['/invention#method', 'how_it_works.txt'],
  ['/invention#results', 'results.log'],
]

export default function Invention() {
  return (
    <Desktop title="Earphones matched to your music - Aronnya Pal" icons={icons} tasks={tasks}>
      <Window id="summary" title="invention.idf" size="wide">
        <h1>Earphones matched to your music</h1>
        <p>A method and system for choosing in-ear monitors by matching their measured frequency response to a target derived from the listener's own music.</p>
        <p className="dim">Invention disclosure, VIT IPR&amp;TT Cell, 2026. Inventor: Aronnya Pal. Field: audio engineering, psychoacoustics and digital signal processing.</p>
      </Window>

      <Window id="problem" title="problem.txt" size="big" i={1}>
        <h2>The problem</h2>
        <p>A buyer faces several thousand in-ear monitors and is given labels like "warm" or "bright", star ratings and reviewers' prose to choose with.</p>
        <p>Measured frequency-response curves exist for most models, but a listener has no way to relate a curve to the music they play. Existing tools score every earphone against one fixed target, or equalise a pair you already own.</p>
      </Window>

      <Window id="numbers" title="numbers" i={2}>
        <dl className="stats" style={{ margin: 0 }}>
          <div><dt>earphone models</dt><dd>3,680</dd></div>
          <div><dt>measured curves</dt><dd>4,940</dd></div>
          <div><dt>measurement sources</dt><dd>84</dd></div>
          <div><dt>reference recordings</dt><dd>3,736</dd></div>
        </dl>
      </Window>

      <Window id="method" title="how_it_works.txt" size="big" i={3}>
        <h2>How it works</h2>
        <ol className="steps">
          <li>The listener's library is averaged into one spectrum, from audio files or from published analyses of named tracks.</li>
          <li>That spectrum is compared with a reference measured from real recordings, showing where the library has more or less energy than typical music.</li>
          <li>A target response is derived that leans the opposite way, because the recordings already supply the emphasis.</li>
          <li>Each frequency is weighted by how reliably it can be measured and by how much the listener's music uses it, balanced across five listening zones.</li>
          <li>Every earphone in the catalogue is ranked by its distance from the target, and each pick is explained zone by zone.</li>
        </ol>
      </Window>

      <Window id="new" title="whats_new.txt" i={4}>
        <h2>What is new</h2>
        <ul className="list">
          <li><span>The target comes from the listener's own music and compensates for it, against a measured reference.</span></li>
          <li><span>It selects hardware to buy, where earlier work equalises hardware you own.</span></li>
          <li><span>Frequencies are weighted by how much independent measurement rigs disagree, and near-duplicate catalogue entries are merged.</span></li>
        </ul>
      </Window>

      <Window id="results" title="results.log" size="wide" i={5}>
        <h2>Results so far</h2>
        <ul className="list">
          <li><b>Personal</b><small>22% overlap</small><span>Two different libraries share on average about a fifth of their top-10 picks.</span></li>
          <li><b>Stable</b><small>0.68</small><span>Two halves of the same library largely agree on the top-10.</span></li>
          <li><b>Close</b><small>0.43 dB</small><span>The top five picks sit within half a decibel of the target on average.</span></li>
        </ul>
        <p className="dim" style={{ marginTop: '1rem' }}>Status: validated in the lab on real data (TRL 4), with <Link to="/#projects">Timbre</Link> as the prototype. A listener preference study has not been run yet, so these results show the method behaves as designed, not that listeners prefer its picks.</p>
        <p><Link className="btn hot" to="/">Back to desktop</Link></p>
      </Window>
    </Desktop>
  )
}
