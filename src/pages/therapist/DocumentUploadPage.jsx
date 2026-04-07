import { Panel } from '../../components/common/Panel.jsx'
import { DocumentUpload } from '../../components/therapist/DocumentUpload.jsx'

export function DocumentUploadPage() {
  const docs = [
    { id: '1', name: 'DS_SpeechProtocol_2024.pdf', status: 'Indexed' },
    { id: '2', name: 'ABA_Guidelines_v3.pdf', status: 'Indexed' },
    { id: '3', name: 'MotorSkills_Framework.docx', status: 'Processing' },
  ]
  return (
    <Panel title="Document Upload" action="Indexed documents">
      <DocumentUpload initialDocs={docs} />
    </Panel>
  )
}

