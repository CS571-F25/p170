import Navigation from './Navigation'
import Timeline from './Timeline'
import ProjectsDisplay from './ProjectsDisplay'
import './Projects.css'

export default function Projects (props) {
    return (
        <div className="projects-container">
            <Navigation />
            <div className="projects-content">
                <Timeline />
                <ProjectsDisplay />
            </div>
        </div>
    )
}

