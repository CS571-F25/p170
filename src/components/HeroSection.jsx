import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-name-wrapper">
            <div className="glowing-blob"></div>
            <h1 className="hero-name">Om Luhar</h1>
          </div>
          <p className="hero-tagline">CS Student at University of Wisconsin Madison</p>
        </div>
      </div>
    </section>
  )
}

