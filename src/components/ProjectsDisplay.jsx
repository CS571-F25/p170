import { Container, Row, Col, Card } from 'react-bootstrap'
import './ProjectsDisplay.css'

export default function ProjectsDisplay() {
  const projects = [
    { 
      id: 1, 
      title: 'Project 1', 
      link: 'https://github.com/omluhar',
      description: ''
    }
  ]

  return (
    <div className="projects-display-container">
      <Container>
        <h2 className="projects-display-title">Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <h3 className="project-title">{project.title}</h3>
                    {project.description && (
                      <p className="project-description">{project.description}</p>
                    )}
                    <div className="project-footer">
                      <span className="project-link-text">View on GitHub →</span>
                    </div>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

