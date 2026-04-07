import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import logo from '../../assets/logo.svg'

function roleAccent(role) {
  if (role === 'student') return 'var(--accent)'
  if (role === 'therapist') return 'var(--accent)'
  if (role === 'admin') return 'var(--accent)'
  return 'var(--accent)'
}

function roleHome(role) {
  if (role === 'student') return '/student/overview'
  if (role === 'parent') return '/parent/overview'
  if (role === 'therapist') return '/therapist/overview'
  if (role === 'admin') return '/admin/overview'
  return '/login'
}

export function LoginPage() {
  const navigate = useNavigate()
  const { login, mockUsers } = useAuth()
  const [role, setRole] = useState('parent')
  const [email, setEmail] = useState('parent@test.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')

  const accent = roleAccent(role)

  const demoHint = useMemo(() => {
    const match = mockUsers.find((u) => u.role === role)
    if (!match) return null
    return `${match.email} / ${match.password}`
  }, [mockUsers, role])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        minHeight: 520,
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div
        style={{
          padding: 28,
          background: 'var(--bg2)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 14px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 14px)',
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src={logo}
              alt="Naivisense logo"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'var(--bg3)',
                objectFit: 'cover',
              }}
            />
            <div style={{ fontSize: 14, color: 'var(--text2)', fontWeight: 600 }}>Naivisense</div>
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, marginTop: 10, lineHeight: 1.1 }}>
            Intelligent therapy.
            <br />
            For every child.
          </div>
          <div
            style={{
              marginTop: 18,
              padding: 14,
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              color: 'var(--text2)',
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            “We built Naivisense to help therapy teams and parents work as one — with AI that stays
            accountable.”
          </div>
        </div>
      </div>

      <div style={{ padding: 28, display: 'grid', placeItems: 'center' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setError('')
            if (!email || !password) {
              setError('Email and password are required.')
              return
            }
            try {
              const res = login(email.trim(), password, role)
              navigate(roleHome(res.role), { replace: true })
            } catch (err) {
              setError(err?.message ?? 'Login failed.')
            }
          }}
          style={{
            width: 'min(420px, 100%)',
            borderRadius: 14,
            border: '1px solid var(--border)',
            background: 'var(--bg2)',
            padding: 18,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Welcome back</div>
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 14 }}>
            Sign in to continue.
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            {[
              { id: 'student', label: 'Student' },
              { id: 'parent', label: 'Parent' },
              { id: 'therapist', label: 'Therapist' },
              { id: 'admin', label: 'Center Head' },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                style={{
                  flex: 1,
                  borderRadius: 10,
                  padding: '8px 10px',
                  border: '1px solid var(--border)',
                  background: role === r.id ? 'var(--bg3)' : 'transparent',
                  color: role === r.id ? accent : 'var(--text2)',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {r.label}
              </button>
            ))}
          </div>

          <label style={{ display: 'block', fontSize: 11, color: 'var(--text2)', marginBottom: 6 }}>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            style={{
              width: '100%',
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              padding: '10px 12px',
              color: 'var(--text)',
              outline: 'none',
              marginBottom: 12,
            }}
          />

          <label style={{ display: 'block', fontSize: 11, color: 'var(--text2)', marginBottom: 6 }}>
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            type="password"
            style={{
              width: '100%',
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              padding: '10px 12px',
              color: 'var(--text)',
              outline: 'none',
              marginBottom: 12,
            }}
          />

          {error ? (
            <div
              style={{
                marginBottom: 12,
                fontSize: 12,
                color: 'var(--red)',
                background: 'var(--red-bg)',
                border: '1px solid rgba(248,113,113,0.2)',
                borderRadius: 10,
                padding: '8px 10px',
              }}
            >
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            style={{
              width: '100%',
              borderRadius: 10,
              border: 'none',
              background: accent,
              color: role === 'therapist' || role === 'admin' ? 'var(--bg)' : '#fff',
              padding: '10px 12px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Sign in
          </button>

          {demoHint ? (
            <div style={{ marginTop: 10, fontSize: 11, color: 'var(--text3)' }}>
              Demo credentials: <span style={{ color: 'var(--text2)' }}>{demoHint}</span>
            </div>
          ) : null}

          <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text2)' }}>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

