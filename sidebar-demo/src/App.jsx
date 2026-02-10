import { useState } from 'react'
import './App.css'

const Icons = {
  Dashboard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Tasks: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Backlog: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  InProgress: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Validation: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.886h6.191l-5.008 3.639 1.912 5.886-5.007-3.64-5.007 3.64 1.912-5.886-5.008-3.639h6.191L12 3z" />
    </svg>
  ),
  Done: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Notification: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Inbox: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Integration: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Reporting: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  Active: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  Past: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Help: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Settings: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Invite: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  External: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Collapse: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </svg>
  ),
  ChevronDown: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  ChevronUp: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  )
}

function App() {
  const [openSections, setOpenSections] = useState({
    overview: true,
    tools: true,
    metrics: true,
  })
  const [tasksOpen, setTasksOpen] = useState(true)
  const [active, setActive] = useState('tasks')

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const select = (id) => {
    setActive(id)
  }

  const itemClass = (id) =>
    `nav-item${active === id ? ' active' : ''}`

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="logo-orb"></div>
        <div className="header-info">
          <h1 className="header-title">Relatel <i>wise</i></h1>
          <p className="header-subtitle">microdose.studio</p>
        </div>
        <div className="collapse-btn">
          <Icons.Collapse />
        </div>
      </header>

      <div className="sidebar-content">
        {/* Overview */}
        <section className="section">
          <div className="section-header" onClick={() => toggleSection('overview')}>
            <span>Overview</span>
            <span className={`section-chevron${openSections.overview ? ' open' : ''}`}>
              <Icons.ChevronDown />
            </span>
          </div>
          <nav className={`section-nav${openSections.overview ? ' open' : ''}`}>
            <div>
              <div className={itemClass('dashboard')} onClick={() => select('dashboard')}>
                <span className="icon"><Icons.Dashboard /></span>
                <span className="label">Dashboard</span>
              </div>
              <div className={itemClass('calendar')} onClick={() => select('calendar')}>
                <span className="icon"><Icons.Calendar /></span>
                <span className="label">Calendar</span>
              </div>
              <div
                className={itemClass('tasks')}
                onClick={() => { select('tasks'); setTasksOpen((v) => !v) }}
              >
                <span className="icon"><Icons.Tasks /></span>
                <span className="label">Tasks</span>
                <span className={`caret${tasksOpen ? ' open' : ''}`}>
                  <Icons.ChevronDown />
                </span>
              </div>
              <div className={`sub-items${tasksOpen ? ' open' : ''}`}>
                <div>
                  <div className={`sub-item${active === 'backlog' ? ' active' : ''}`} onClick={() => select('backlog')}>
                    <span className="icon"><Icons.Backlog /></span>
                    <span className="label">Backlog</span>
                    <span className="count">24</span>
                  </div>
                  <div className={`sub-item${active === 'inprogress' ? ' active' : ''}`} onClick={() => select('inprogress')}>
                    <span className="icon"><Icons.InProgress /></span>
                    <span className="label">In progress</span>
                    <span className="count">4</span>
                  </div>
                  <div className={`sub-item${active === 'validation' ? ' active' : ''}`} onClick={() => select('validation')}>
                    <span className="icon"><Icons.Validation /></span>
                    <span className="label">Validation</span>
                    <span className="count">7</span>
                  </div>
                  <div className={`sub-item${active === 'done' ? ' active' : ''}`} onClick={() => select('done')}>
                    <span className="icon"><Icons.Done /></span>
                    <span className="label">Done</span>
                    <span className="count">13</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>

        {/* Tools */}
        <section className="section">
          <div className="section-header" onClick={() => toggleSection('tools')}>
            <span>Tools</span>
            <span className={`section-chevron${openSections.tools ? ' open' : ''}`}>
              <Icons.ChevronDown />
            </span>
          </div>
          <nav className={`section-nav${openSections.tools ? ' open' : ''}`}>
            <div>
              <div className={itemClass('notification')} onClick={() => select('notification')}>
                <span className="icon"><Icons.Notification /></span>
                <span className="label">Notification</span>
                <span className="badge">7</span>
              </div>
              <div className={itemClass('inbox')} onClick={() => select('inbox')}>
                <span className="icon"><Icons.Inbox /></span>
                <span className="label">Inbox</span>
              </div>
              <div className={itemClass('integration')} onClick={() => select('integration')}>
                <span className="icon"><Icons.Integration /></span>
                <span className="label">Integration</span>
              </div>
              <div className={itemClass('reporting')} onClick={() => select('reporting')}>
                <span className="icon"><Icons.Reporting /></span>
                <span className="label">Reporting</span>
              </div>
            </div>
          </nav>
        </section>

        {/* Metrics */}
        <section className="section">
          <div className="section-header" onClick={() => toggleSection('metrics')}>
            <span>Metrics</span>
            <span className={`section-chevron${openSections.metrics ? ' open' : ''}`}>
              <Icons.ChevronDown />
            </span>
          </div>
          <nav className={`section-nav${openSections.metrics ? ' open' : ''}`}>
            <div>
              <div className={itemClass('active-metric')} onClick={() => select('active-metric')}>
                <span className="icon"><Icons.Active /></span>
                <span className="label">Active</span>
                <div className="indicator-dot"></div>
              </div>
              <div className={itemClass('past')} onClick={() => select('past')}>
                <span className="icon"><Icons.Past /></span>
                <span className="label">Past</span>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <footer className="sidebar-footer">
        <div className="footer-item">
          <span className="icon"><Icons.Help /></span>
          <span className="label">Help Center</span>
          <Icons.External />
        </div>
        <div className="footer-item">
          <span className="icon"><Icons.Settings /></span>
          <span className="label">Settings</span>
        </div>
        <div className="footer-item">
          <span className="icon"><Icons.Invite /></span>
          <span className="label">Invite teams</span>
        </div>
      </footer>

      <div className="user-profile">
        <div className="avatar">👨‍💻</div>
        <div className="user-info">
          <p className="user-name">Kamil Bachanek</p>
          <p className="user-email">kamil@microdose.studio</p>
        </div>
        <div className="status-dot"></div>
      </div>
    </aside>
  )
}

export default App
