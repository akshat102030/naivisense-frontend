import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'

export function Topbar({ title, role }) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const accent = 'var(--accent)'

  return (
    <header
      style={{
        height: role === 'therapist' ? 58 : 60,
        background: 'var(--bg2)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>{title}</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          type="button"
          onClick={() => {
            logout()
            navigate('/login')
          }}
          style={{
            height: 35,
            padding: '0 12px',
            borderRadius: 8,
            border: '1px solid var(--border2)',
            background: 'transparent',
            color: accent,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.oneOf(['student', 'parent', 'therapist', 'admin']).isRequired,
}

