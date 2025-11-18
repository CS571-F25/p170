import { Container, Row, Col, Card } from 'react-bootstrap'
import './AboutSection.css'

export default function AboutSection() {
  const csCourses = [
    { code: 'CS 300', name: 'Programming II', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI300' },
    { code: 'CS 400', name: 'Programming III', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI400' },
    { code: 'CS 252', name: 'Introduction to Computer Engineering', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI252' },
    { code: 'CS 571', name: 'Building User Interfaces', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI571' },
    { code: 'CS 354', name: 'Machine Organization and Programming', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI354' },
    { code: 'CS 570', name: 'Introduction to Human-Computer Interaction', link: 'https://guide.wisc.edu/courses/comp_sci/#COMPSCI570' }
  ]

  const mathCourses = [
    { code: 'MATH 340', name: 'Elementary Matrix and Linear Algebra', link: 'https://guide.wisc.edu/courses/math/#MATH340' },
    { code: 'MATH 240', name: 'Introduction to Discrete Mathematics', link: 'https://guide.wisc.edu/courses/math/#MATH240' }
  ]

  return (
    <div className="about-section">
      <Container>
        {/* Personal Information Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="about-card personal-card">
              <Card.Body>
                <h2 className="section-title">About Me</h2>
                <Row>
                  <Col md={8}>
                    <p className="about-text">
                      I'm a 19-year-old Computer Science student originally from Chicago, now pursuing my passion for technology 
                      at the University of Wisconsin-Madison. When I'm not coding or studying, I enjoy staying active through 
                      weightlifting and various sports. I also find relaxation in listening to music and practicing origami, 
                      which helps me maintain a balance between my technical pursuits and creative interests.
                    </p>
                    <div className="interests">
                      <h4>Interests & Hobbies</h4>
                      <div className="interest-tags">
                        <span className="interest-tag">🏋️ Weightlifting</span>
                        <span className="interest-tag">🎵 Music</span>
                        <span className="interest-tag">📄 Origami</span>
                        <span className="interest-tag">⚽ Sports</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="personal-info-box">
                      <div className="info-item">
                        <strong>Age:</strong> 19
                      </div>
                      <div className="info-item">
                        <strong>Hometown:</strong> Chicago, IL
                      </div>
                      <div className="info-item">
                        <strong>Current Location:</strong> Madison, WI
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* University Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="about-card university-card">
              <Card.Body>
                <h2 className="section-title">University of Wisconsin-Madison</h2>
                <Row>
                  <Col md={8}>
                    <p className="about-text">
                      I'm currently pursuing a Bachelor's degree in Computer Sciences at the University of Wisconsin-Madison, 
                      one of the top public research universities in the United States. The Computer Sciences program at UW-Madison 
                      is renowned for its rigorous curriculum, cutting-edge research, and strong industry connections.
                    </p>
                    <p className="about-text">
                      The Computer Sciences building on campus provides state-of-the-art facilities including modern computer labs, 
                      collaborative workspaces, and research laboratories. The program emphasizes both theoretical foundations and 
                      practical applications, preparing students for careers in software development, research, and various 
                      technology-driven fields.
                    </p>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="university-info-box">
                      <div className="info-item">
                        <strong>University:</strong> UW-Madison
                      </div>
                      <div className="info-item">
                        <strong>Major:</strong> Computer Sciences
                      </div>
                      <div className="info-item">
                        <strong>Status:</strong> Undergraduate
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Courses Section */}
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="about-card courses-card">
              <Card.Body>
                <h3 className="subsection-title">Computer Science Courses</h3>
                <p className="course-description">
                  Relevant CS courses I've taken as part of my degree program:
                </p>
                <ul className="course-list">
                  {csCourses.map((course, index) => (
                    <li key={index} className="course-item">
                      <a 
                        href={course.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="course-link"
                      >
                        <strong>{course.code}</strong> - {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="course-link-footer">
                  <a 
                    href="https://guide.wisc.edu/courses/comp_sci/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="all-courses-link"
                  >
                    View All CS Courses →
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="about-card courses-card">
              <Card.Body>
                <h3 className="subsection-title">Mathematics Courses</h3>
                <p className="course-description">
                  Supporting mathematics courses that complement my CS studies:
                </p>
                <ul className="course-list">
                  {mathCourses.map((course, index) => (
                    <li key={index} className="course-item">
                      <a 
                        href={course.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="course-link"
                      >
                        <strong>{course.code}</strong> - {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="course-link-footer">
                  <a 
                    href="https://guide.wisc.edu/courses/math/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="all-courses-link"
                  >
                    View All Math Courses →
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

