import { Container } from 'react-bootstrap'
import './Timeline.css'

export default function Timeline() {
  const experiences = [
    { 
      id: 1, 
      title: 'Software Engineer Intern', 
      company: 'Voyager Netz',
      date: 'Jun. 2023 – Jun. 2024'
    },
    { 
      id: 2, 
      title: 'AI Software Engineer', 
      company: 'Outlier AI',
      date: 'Oct. 2024 – Sep. 2025'
    },
    { 
      id: 3, 
      title: 'AI Research Assistant', 
      company: 'Mad Ability Lab',
      date: 'May 2025 – Present'
    },
    { 
      id: 4, 
      title: 'Software Engineer Intern', 
      company: 'Fugen Technology',
      date: 'May 2025 – Aug. 2025'
    },
    { 
      id: 5, 
      title: 'Software Engineer', 
      company: 'WisQ Quantum Computing Group',
      date: 'Sep. 2025 – Present'
    }
  ]

  return (
    <div className="timeline-container">
      <Container>
        <h2 className="timeline-title">Experience Timeline</h2>
        <div className="timeline-wrapper">
          <div className="timeline-line-horizontal"></div>
          <div className="timeline-points">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="timeline-point-wrapper">
                <div className="timeline-point">
                  <div className="timeline-point-glow"></div>
                  <div className="timeline-point-inner"></div>
                </div>
                <div className="timeline-company-name">{experience.company}</div>
                <div className="timeline-content">
                  <div className="timeline-date">{experience.date}</div>
                  <h3 className="timeline-item-title">{experience.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

