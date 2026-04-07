import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function SignupPage() {
  const [role, setRole] = useState('parent')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [centerCode, setCenterCode] = useState('')
  const [error, setError] = useState('')

  const accent = 'var(--accent)'

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        minHeight: 560,
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
      }}
    >
      <div style={{ padding: 28, background: 'var(--bg2)' }}>
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
          Start your journey.
        </div>
        <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 10, lineHeight: 1.5 }}>
          Signup is mocked for now — this screen exists to complete routing and structure exactly as
          in the spec.
        </div>
      </div>

      <div style={{ padding: 28, display: 'grid', placeItems: 'center' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setError('')
            if (!name || !email || password.length < 6) {
              setError('Please provide name, email, and a password (min 6 chars).')
              return
            }
            if ((role === 'therapist' || role === 'admin') && !centerCode) {
              setError('Center code is required for therapist/admin.')
              return
            }
            setError('Signup is not wired yet (mock). Please use demo login.')
          }}
          style={{
            width: 'min(420px, 100%)',
            borderRadius: 14,
            border: '1px solid var(--border)',
            background: 'var(--bg2)',
            padding: 18,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Create account</div>
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 14 }}>
            Choose your role to continue.
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
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
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
            placeholder="Min 6 characters"
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

          {(role === 'therapist' || role === 'admin') && (
            <>
              <label
                style={{ display: 'block', fontSize: 11, color: 'var(--text2)', marginBottom: 6 }}
              >
                Center code
              </label>
              <input
                value={centerCode}
                onChange={(e) => setCenterCode(e.target.value)}
                placeholder="CENTER-XXXX"
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
            </>
          )}

          {error ? (
            <div
              style={{
                marginBottom: 12,
                fontSize: 12,
                color: 'var(--amber)',
                background: 'var(--amber-bg)',
                border: '1px solid rgba(251,191,36,0.2)',
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
            Sign up
          </button>

          <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text2)' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

