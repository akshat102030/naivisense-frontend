import { useContext } from 'react'
import { ChildContext } from '../context/ChildContext.jsx'

export function useChild() {
  const ctx = useContext(ChildContext)
  if (!ctx) throw new Error('useChild must be used within ChildProvider')
  return ctx
}

