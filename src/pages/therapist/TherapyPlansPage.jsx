import { Panel } from '../../components/common/Panel.jsx'
import { TherapyPlanEditor } from '../../components/therapist/TherapyPlanEditor.jsx'

export function TherapyPlansPage() {
  const items = [
    { id: '1', title: 'Speech & Language Therapy', description: 'Vocabulary expansion and AAC practice.' },
    { id: '2', title: 'Occupational Therapy', description: 'Fine motor and hand-eye coordination exercises.' },
    { id: '3', title: 'Social Skills Group', description: 'Role-play and turn-taking drills.' },
  ]
  return (
    <Panel title="Therapy Plans" action="Edit plan">
      <TherapyPlanEditor items={items} />
    </Panel>
  )
}

