import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Om Luhar</h1>
          <p className="hero-tagline">CS Student at University of Wisconsin Madison</p>
        </div>
        <div className="hero-graphic">
          <svg viewBox="0 0 400 400" className="abstract-graphic">
            {/* Abstract geometric shapes */}
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className="shape-1"/>
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" className="shape-2"/>
            <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.15" className="shape-3"/>
            
            {/* Geometric lines */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1.5" opacity="0.2" className="line-1"/>
            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.2" className="line-2"/>
            
            {/* Diagonal lines */}
            <line x1="0" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="1" opacity="0.15" className="line-3"/>
            <line x1="400" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="1" opacity="0.15" className="line-4"/>
            
            {/* Floating shapes */}
            <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.4" className="float-1"/>
            <circle cx="300" cy="150" r="12" fill="currentColor" opacity="0.3" className="float-2"/>
            <circle cx="150" cy="300" r="10" fill="currentColor" opacity="0.35" className="float-3"/>
            <circle cx="320" cy="320" r="18" fill="currentColor" opacity="0.25" className="float-4"/>
            
            {/* Hexagon */}
            <polygon points="200,80 240,100 240,140 200,160 160,140 160,100" 
                     fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className="hexagon"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

