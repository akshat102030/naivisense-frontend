import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/common/Sidebar.jsx'
import { Topbar } from '../components/common/Topbar.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { useChild } from '../hooks/useChild.js'

const navItems = [
  {
    section: 'Today',
    items: [
      { label: 'Dashboard', to: '/student/overview' },
      { label: 'Session', to: '/student/session' },
      { label: 'Progress', to: '/student/progress' },
    ],
  },
  {
    section: 'Support',
    items: [
      { label: 'Assistant', to: '/student/assistant' },
      { label: 'Help', to: '/student/help' },
    ],
  },
]

function pageTitle(pathname) {
  if (pathname.includes('/student/session')) return 'Therapy Session'
  if (pathname.includes('/student/progress')) return 'My Progress'
  if (pathname.includes('/student/assistant')) return 'AI Assistant'
  if (pathname.includes('/student/help')) return 'Help'
  return 'Student Dashboard'
}

export function StudentLayout() {
  const { user } = useAuth()
  const { selectedChild } = useChild()
  const { pathname } = useLocation()

  return (
    <div data-role="student" style={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar
        role="student"
        navItems={navItems}
        user={user}
        child={selectedChild}
        accent="var(--accent)"
      />
      <div style={{ flex: 1, marginLeft: 'var(--sidebar-current)' }}>
        <Topbar title={pageTitle(pathname)} role="student" />
        <div style={{ padding: 24 }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

