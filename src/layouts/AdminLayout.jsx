import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/common/Sidebar.jsx'
import { Topbar } from '../components/common/Topbar.jsx'
import { useAuth } from '../hooks/useAuth.js'

const navItems = [
  {
    section: 'Command',
    items: [
      { label: 'Overview', to: '/admin/overview' },
      { label: 'All Children', to: '/admin/children' },
      { label: 'Therapist Staff', to: '/admin/therapists' },
      { label: 'Analytics', to: '/admin/analytics' },
    ],
  },
  {
    section: 'Governance',
    items: [
      { label: 'Feedback Verification', to: '/admin/feedback', badge: 5, badgeVariant: 'gold' },
      { label: 'Anomaly Review', to: '/admin/anomalies', badge: 3, badgeVariant: 'red' },
      { label: 'Reports', to: '/admin/reports' },
    ],
  },
  {
    section: 'AI System',
    items: [
      { label: 'Model Health', to: '/admin/model-health' },
      { label: 'Settings', to: '/admin/overview#settings' },
    ],
  },
]

function pageTitle(pathname) {
  if (pathname.includes('/admin/children')) return 'All Children'
  if (pathname.includes('/admin/therapists')) return 'Therapist Staff'
  if (pathname.includes('/admin/analytics')) return 'Analytics'
  if (pathname.includes('/admin/feedback')) return 'Feedback Verification'
  if (pathname.includes('/admin/anomalies')) return 'Anomaly Review'
  if (pathname.includes('/admin/reports')) return 'Reports'
  if (pathname.includes('/admin/model-health')) return 'Model Health'
  return 'Command Center'
}

export function AdminLayout() {
  const { user } = useAuth()
  const { pathname } = useLocation()

  return (
    <div data-role="admin" style={{ minHeight: '100vh', display: 'flex' }}>
      <Sidebar role="admin" navItems={navItems} user={user} accent="var(--accent)" />
      <div style={{ flex: 1, marginLeft: 'var(--sidebar-current)' }}>
        <Topbar title={pageTitle(pathname)} role="admin" />
        <div style={{ padding: 26 }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

