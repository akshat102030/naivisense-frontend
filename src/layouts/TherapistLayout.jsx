import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/common/Sidebar.jsx'
import { Topbar } from '../components/common/Topbar.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { useChild } from '../hooks/useChild.js'

const navItems = [
  {
    section: 'Clinical',
    items: [
      { label: 'Child Overview', to: '/therapist/overview' },
      { label: 'Progress Analysis', to: '/therapist/progress' },
      { label: 'Therapy Plans', to: '/therapist/therapy-plans' },
      { label: 'Behavior Logs', to: '/therapist/behavior-logs' },
      { label: 'Anomaly Alerts', to: '/therapist/anomalies', badge: 1 },
    ],
  },
  {
    section: 'AI Tools',
    items: [
      { label: 'Document Upload', to: '/therapist/documents', badge: 3, badgeVariant: 'green' },
      { label: 'AI Insights', to: '/therapist/ai-insights' },
      { label: 'Sessions', to: '/therapist/sessions' },
    ],
  },
]

function pageTitle(pathname) {
  if (pathname.includes('/therapist/progress')) return 'Progress Analysis'
  if (pathname.includes('/therapist/therapy-plans')) return 'Therapy Plans'
  if (pathname.includes('/therapist/behavior-logs')) return 'Behavior Logs'
  if (pathname.includes('/therapist/anomalies')) return 'Anomaly Alerts'
  if (pathname.includes('/therapist/documents')) return 'Document Upload'
  if (pathname.includes('/therapist/ai-insights')) return 'AI Insights'
  if (pathname.includes('/therapist/sessions')) return 'Sessions'
  return 'Child Overview'
}

export function TherapistLayout() {
  const { user } = useAuth()
  const { selectedChild } = useChild()
  const { pathname } = useLocation()

  return (
    <div data-role="therapist" style={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar
        role="therapist"
        navItems={navItems}
        user={user}
        child={selectedChild}
        accent="var(--accent)"
      />
      <div style={{ flex: 1, marginLeft: 'var(--sidebar)' }}>
        <Topbar title={pageTitle(pathname)} role="therapist" />
        <div style={{ padding: 24 }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

