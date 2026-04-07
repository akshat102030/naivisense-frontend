import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { children as mockChildren } from '../data/mockChildren.js'

const STORAGE_KEY = 'naivisense.selectedChildId'

export const ChildContext = createContext(null)

export function ChildProvider({ children }) {
  const [selectedChildId, setSelectedChildId] = useState(null)

  useEffect(() => {
    const persisted = localStorage.getItem(STORAGE_KEY)
    if (persisted) setSelectedChildId(persisted)
  }, [])

  useEffect(() => {
    if (selectedChildId) localStorage.setItem(STORAGE_KEY, selectedChildId)
  }, [selectedChildId])

  const setSelectedChild = useCallback((child) => {
    if (!child) {
      setSelectedChildId(null)
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    setSelectedChildId(child.id)
  }, [])

  const selectedChild = useMemo(() => {
    const fallback = mockChildren?.[0] ?? null
    return mockChildren.find((c) => c.id === selectedChildId) ?? fallback
  }, [selectedChildId])

  const value = useMemo(
    () => ({ selectedChild, setSelectedChild, allChildren: mockChildren }),
    [selectedChild, setSelectedChild],
  )

  return <ChildContext.Provider value={value}>{children}</ChildContext.Provider>
}

ChildProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

