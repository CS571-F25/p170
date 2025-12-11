import { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import './ProjectsDisplay.css'

export default function ProjectsDisplay() {
  const projects = [
    { 
      id: 1, 
      title: 'OCD Symptom Tracker', 
      link: 'https://github.com/omluhar/ocd-symptom-system',
      description: 'A comprehensive system for OCD symptom analysis and tracking, combining real-time scene analysis with structured symptom formulation. Features interactive chat interface, RAG-based responses using clinical knowledge, and GPT-4V scene analysis for trigger detection.'
    },
    { 
      id: 2, 
      title: 'Portfolio Webpage', 
      link: 'https://github.com/omluhar/omluhar.github.io',
      description: 'A personal portfolio website showcasing projects, experience, and skills. Built with modern web technologies and responsive design.'
    },
    { 
      id: 3, 
      title: 'WisQ Quantum Compiler', 
      link: 'https://github.com/omluhar/wisq',
      description: 'A quantum computing compiler project developed as part of the WisQ Quantum Computing Group. Focuses on optimizing quantum circuit compilation and execution.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextProject = () => {
    if (isAnimating) return
    setDirection('right')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setDirection(null)
      setIsAnimating(false)
    }, 300)
  }

  const prevProject = () => {
    if (isAnimating) return
    setDirection('left')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
      setDirection(null)
      setIsAnimating(false)
    }, 300)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="projects-display-container">
      <Container>
        <h2 className="projects-display-title">Projects</h2>
        <div className="projects-carousel">
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={prevProject}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <div className="project-card-wrapper">
            <div 
              key={currentIndex}
              className={`project-card-container ${direction === 'right' ? 'slide-in-right' : direction === 'left' ? 'slide-in-left' : ''}`}
            >
              <Card className="project-card">
                <Card.Body>
                  <a 
                    href={currentProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <h3 className="project-title">{currentProject.title}</h3>
                    {currentProject.description && (
                      <p className="project-description">{currentProject.description}</p>
                    )}
                    <div className="project-footer">
                      <span className="project-link-text">View on GitHub →</span>
                    </div>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>

          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={nextProject}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </Container>
    </div>
  )
}

