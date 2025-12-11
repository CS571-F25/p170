import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'
import ThemeToggle from './ThemeToggle'
import './Navigation.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '')
  }

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about"
              className={isActive('/about') ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/work"
              className={isActive('/work') ? 'active' : ''}
            >
              Work
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

