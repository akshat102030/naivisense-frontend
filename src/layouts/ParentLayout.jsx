import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/common/Sidebar.jsx'
import { Topbar } from '../components/common/Topbar.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { useChild } from '../hooks/useChild.js'

const navItems = [
  {
    section: 'Main',
    items: [
      { label: 'Overview', to: '/parent/overview' },
      { label: 'Progress', to: '/parent/progress' },
      { label: 'Behavior Logs', to: '/parent/behavior-logs' },
      { label: 'Therapy Plan', to: '/parent/therapy-plan' },
    ],
  },
  {
    section: 'Support',
    items: [
      { label: 'AI Assistant', to: '/parent/ai-assistant' },
      { label: 'Alerts', to: '/parent/alerts', badge: 2 },
      { label: 'Feedback', to: '/parent/overview#feedback' },
    ],
  },
]

function pageTitle(pathname) {
  if (pathname.includes('/parent/progress')) return 'Progress'
  if (pathname.includes('/parent/behavior-logs')) return 'Behavior Logs'
  if (pathname.includes('/parent/therapy-plan')) return 'Therapy Plan'
  if (pathname.includes('/parent/ai-assistant')) return 'AI Assistant'
  if (pathname.includes('/parent/alerts')) return 'Alerts'
  return 'Overview'
}

export function ParentLayout() {
  const { user } = useAuth()
  const { selectedChild } = useChild()
  const { pathname } = useLocation()

  return (
    <div data-role="parent" style={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar
        role="parent"
        navItems={navItems}
        user={user}
        child={selectedChild}
        accent="var(--accent)"
      />
      <div style={{ flex: 1, marginLeft: 'var(--sidebar)' }}>
        <Topbar title={pageTitle(pathname)} role="parent" />
        <div style={{ padding: 28 }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

