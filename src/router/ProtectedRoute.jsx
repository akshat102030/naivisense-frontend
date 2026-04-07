import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

function roleHome(role) {
  if (role === 'student') return '/student/overview'
  if (role === 'parent') return '/parent/overview'
  if (role === 'therapist') return '/therapist/overview'
  if (role === 'admin') return '/admin/overview'
  return '/login'
}

export function ProtectedRoute({ allowRole }) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (allowRole && role !== allowRole) return <Navigate to={roleHome(role)} replace />

  return <Outlet />
}

ProtectedRoute.propTypes = {
  allowRole: PropTypes.oneOf(['student', 'parent', 'therapist', 'admin']),
}

