import { useState, useEffect } from 'react'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(() => {
    // Read from localStorage on initial load, default to dark
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme === 'light'
    }
    return false
  })

  useEffect(() => {
    // Apply theme to document and save to localStorage
    if (isLightMode) {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [isLightMode])

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
  }

  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${isLightMode ? 'light' : 'dark'}`}
        onClick={toggleTheme}
        aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        <span className="toggle-slider"></span>
        <span className="toggle-icon">{isLightMode ? '☀️' : '🌙'}</span>
      </button>
    </div>
  )
}

