import { useState } from 'react'
import './QuoteCarousel.css'

export default function QuoteCarousel() {
  const quotes = [
    "Master the art of staying unbothered — and life becomes beautiful.",
    "Peace comes from within. Do not seek it without.",
    "The quieter you become, the more you can hear.",
    "Let go of what no longer serves you, and make room for what does.",
    "In the midst of chaos, find your stillness."
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleClick = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
      setIsFading(false)
    }, 300)
  }

  return (
    <div className="quote-section" onClick={handleClick}>
      <div className="quote-glow"></div>
      <p className={`quote-text ${isFading ? 'fade-out' : 'fade-in'}`}>
        "{quotes[currentIndex]}"
      </p>
    </div>
  )
}

