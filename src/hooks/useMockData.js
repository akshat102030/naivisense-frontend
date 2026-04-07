import { useMemo } from 'react'
import { anomalies } from '../data/mockAnomalies.js'
import { behaviorLogs } from '../data/mockBehaviorLogs.js'
import { children } from '../data/mockChildren.js'
import { feedbackQueue } from '../data/mockFeedback.js'
import { progressHistory } from '../data/mockProgress.js'
import { sessions } from '../data/mockSessions.js'
import { therapists } from '../data/mockTherapists.js'

export function useMockData() {
  return useMemo(
    () => ({
      children,
      therapists,
      feedbackQueue,
      anomalies,
      sessions,
      behaviorLogs,
      progressHistory,
    }),
    [],
  )
}

