import Navigation from './Navigation'
import AboutSection from './AboutSection'
import './About.css'

export default function About (props) {
    return (
        <div className="about-container">
            <Navigation />
            <div className="about-content">
                <h1>About</h1>
                <AboutSection />
            </div>
        </div>
    )
}

