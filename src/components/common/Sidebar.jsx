import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Avatar } from './Avatar.jsx'
import logo from '../../assets/logo.svg'

function Logo({ role }) {
  const roleLabel =
    role === 'therapist'
      ? 'Therapist'
      : role === 'admin'
        ? 'Center Head'
        : role === 'student'
          ? 'Student'
          : null

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 22px 22px',
        borderBottom: '1px solid var(--border)',
        marginBottom: 16,
      }}
    >
      <img
        src={logo}
        alt="Naivisense logo"
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          objectFit: 'cover',
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          display: 'block',
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>Naivisense</div>
        {roleLabel ? (
          <div
            style={{
              fontSize: 10,
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginTop: 1,
              color: role === 'admin' ? 'var(--gold)' : 'var(--teal-accent)',
              fontWeight: 600,
            }}
          >
            {roleLabel}
          </div>
        ) : (
          <div
            style={{
              fontSize: 10,
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginTop: 1,
              color: 'var(--text3)',
              fontWeight: 600,
            }}
          >
            Therapy Intelligence
          </div>
        )}
      </div>
    </div>
  )
}

Logo.propTypes = {
  role: PropTypes.oneOf(['student', 'parent', 'therapist', 'admin']).isRequired,
}

function ChildChip({ child, accent }) {
  if (!child) return null
  return (
    <div
      style={{
        margin: '0 14px 18px',
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r)',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 999,
          display: 'grid',
          placeItems: 'center',
          fontSize: 13,
          fontWeight: 700,
          color: '#fff',
          background: `linear-gradient(135deg, ${accent}, var(--cyan))`,
        }}
      >
        {child.name?.[0]?.toUpperCase?.() ?? 'C'}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{child.name}</div>
        <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 1 }}>
          {child.condition} · Age {child.age}
        </div>
      </div>
    </div>
  )
}

ChildChip.propTypes = {
  child: PropTypes.object,
  accent: PropTypes.string.isRequired,
}

export function Sidebar({ navItems, role, user, child, accent }) {
  return (
    <aside
      style={{
        width: 'var(--sidebar)',
        minHeight: '100vh',
        background: 'var(--bg2)',
        borderRight: '1px solid var(--border)',
        position: 'fixed',
        inset: '0 auto 0 0',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0 20px',
        zIndex: 100,
      }}
    >
      <Logo role={role} />
      {role !== 'admin' ? <ChildChip child={child} accent={accent} /> : null}

      <nav style={{ flex: 1, overflowY: 'auto', padding: '0 10px' }}>
        {navItems.map((section) => (
          <div key={section.section} style={{ marginTop: 10 }}>
            <div
              style={{
                fontSize: 10,
                color: 'var(--text3)',
                letterSpacing: 0.8,
                textTransform: 'uppercase',
                padding: '4px 12px 8px',
              }}
            >
              {section.section}
            </div>
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 12px',
                  borderRadius: 8,
                  fontSize: 13.5,
                  color: isActive ? accent : 'var(--text2)',
                  textDecoration: 'none',
                  background:
                    isActive && role === 'student'
                      ? 'var(--green-bg)'
                      : isActive
                        ? 'var(--accent-glow)'
                        : 'transparent',
                  border:
                    role === 'admin' && isActive ? '1px solid var(--gold-border)' : 'none',
                  transition: 'all 0.15s',
                  marginBottom: 2,
                })}
              >
                <span style={{ opacity: 0.7 }}>{item.label}</span>
                {typeof item.badge === 'number' ? (
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: 10,
                      background:
                        item.badgeVariant === 'gold'
                          ? 'var(--amber-bg)'
                          : item.badgeVariant === 'green'
                            ? 'var(--amber-bg)'
                            : item.badgeVariant === 'red'
                              ? 'var(--red-bg)'
                              : 'var(--red)',
                      color:
                        item.badgeVariant === 'gold'
                          ? 'var(--amber)'
                          : item.badgeVariant === 'green'
                            ? 'var(--amber)'
                          : item.badgeVariant === 'red'
                            ? 'var(--red)'
                            : '#fff',
                      border:
                        item.badgeVariant === 'gold'
                          ? '1px solid var(--accent-border)'
                          : item.badgeVariant === 'green'
                            ? '1px solid var(--accent-border)'
                          : item.badgeVariant === 'red'
                            ? '1px solid rgba(221,28,48,0.24)'
                            : 'none',
                    }}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div
        style={{
          padding: '14px 12px 0',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Avatar name={user?.name ?? 'User'} variant={role} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
            {user?.name ?? '—'}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 1 }}>
            {role === 'student'
              ? 'Student'
              : role === 'parent'
              ? 'Parent · Guardian'
              : role === 'therapist'
                ? 'Therapist'
                : 'Center Head · Admin'}
          </div>
        </div>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
          badge: PropTypes.number,
          badgeVariant: PropTypes.string,
        }),
      ).isRequired,
    }),
  ).isRequired,
  role: PropTypes.oneOf(['student', 'parent', 'therapist', 'admin']).isRequired,
  user: PropTypes.shape({ name: PropTypes.string }),
  child: PropTypes.object,
  accent: PropTypes.string.isRequired,
}

