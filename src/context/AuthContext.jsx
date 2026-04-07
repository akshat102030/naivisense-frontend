import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'naivisense.auth'

const MOCK_USERS = [
  {
    email: 'student@test.com',
    password: '123456',
    role: 'student',
    name: 'Aryan Mehta',
  },
  {
    email: 'parent@test.com',
    password: '123456',
    role: 'parent',
    name: 'Rahul Mehta',
  },
  {
    email: 'therapist@test.com',
    password: '123456',
    role: 'therapist',
    name: 'Dr. Priya Nair',
  },
  { email: 'admin@test.com', password: '123456', role: 'admin', name: 'Akshat' },
]

export const AuthContext = createContext(null)

function safeParse(json) {
  try {
    return JSON.parse(json)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const isAuthenticated = Boolean(user && role)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? safeParse(raw) : null
    if (parsed?.user && parsed?.role) {
      setUser(parsed.user)
      setRole(parsed.role)
    }
  }, [])

  const login = useCallback((email, password, selectedRole) => {
    const match = MOCK_USERS.find(
      (u) => u.email === email && u.password === password && u.role === selectedRole,
    )
    if (!match) {
      const err = new Error('Invalid credentials')
      err.code = 'INVALID_CREDENTIALS'
      throw err
    }

    const nextUser = { email: match.email, name: match.name }
    setUser(nextUser)
    setRole(match.role)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: nextUser, role: match.role }))
    return { user: nextUser, role: match.role }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setRole(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const value = useMemo(
    () => ({
      user,
      role,
      isAuthenticated,
      login,
      logout,
      mockUsers: MOCK_USERS.map(({ email, password, role }) => ({ email, password, role })),
    }),
    [isAuthenticated, login, logout, role, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

