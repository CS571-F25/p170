import Navigation from './Navigation'
import HeroSection from './HeroSection'
import './Home.css'

export default function Home (props) {
    return (
        <div className="home-container">
            <Navigation />
            <HeroSection />
        </div>
    )
}