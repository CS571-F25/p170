import { Container } from 'react-bootstrap'
import './Timeline.css'

export default function Timeline() {
  const experiences = [
    { id: 1, title: 'Experience 1', date: 'Sep 2025 - Present', icon: '💼' },
    { id: 2, title: 'Experience 2', date: 'May 2025 - Aug 2025', icon: '💼' },
    { id: 3, title: 'Experience 3', date: 'May 2025 - Present', icon: '💻' },
    { id: 4, title: 'Experience 4', date: 'Oct 2024 - Sep 2025', icon: '💻' }
  ]

  return (
    <div className="timeline-container">
      <Container>
        <h2 className="timeline-title">Experience Timeline</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">{experience.icon}</div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{experience.date}</div>
                <h3 className="timeline-item-title">{experience.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

