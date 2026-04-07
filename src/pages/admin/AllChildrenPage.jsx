import { Panel } from '../../components/common/Panel.jsx'
import { ChildrenTable } from '../../components/admin/ChildrenTable.jsx'
import { useMockData } from '../../hooks/useMockData.js'

export function AllChildrenPage() {
  const { children } = useMockData()
  return (
    <Panel title="All Children" action="Search + filter">
      <ChildrenTable children={children} />
    </Panel>
  )
}

