import './Requirements.scss'

interface Requirements {
  requirementsHeader: string,
  requirements: string,
}

export default function Requirements({requirementsHeader, requirements}: Requirements) {
  return (
    <div className="requirements">
        <p className="requirements-header">{requirementsHeader}</p>
        <p className="requirements-description">{requirements}</p>
      </div>
  )
}