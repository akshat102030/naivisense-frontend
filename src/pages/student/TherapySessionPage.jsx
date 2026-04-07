import { Panel } from '../../components/common/Panel.jsx'
import { StepWizard } from '../../components/student/StepWizard.jsx'
import { VoiceDock } from '../../components/student/VoiceDock.jsx'

const steps = [
  {
    title: 'Warm Up: Breathing',
    instruction: 'Take a deep breath in for 3 seconds and breathe out slowly.',
    visualHint: 'Circle animation expands and contracts.',
    audioHint: 'Calm guided breathing audio.',
  },
  {
    title: 'Speech Exercise',
    instruction: 'Say the shown word slowly and clearly two times.',
    visualHint: 'Word card with large text and icon.',
    audioHint: 'Example pronunciation before your turn.',
  },
  {
    title: 'Motor Task',
    instruction: 'Tap the highlighted targets from left to right.',
    visualHint: 'Large touch targets with color cues.',
    audioHint: 'Encouragement cues for each correct tap.',
  },
]

export function TherapySessionPage() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Panel title="Guided Therapy Session" action="Wizard mode">
        <StepWizard steps={steps} />
      </Panel>
      <Panel title="Voice Interaction">
        <VoiceDock state="listening" />
      </Panel>
    </div>
  )
}

