import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: 'var(--bg)',
      }}
    >
      <div style={{ width: 'min(980px, 100%)' }}>
        <Outlet />
      </div>
    </div>
  )
}

