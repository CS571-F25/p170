import Navigation from './Navigation'
import Timeline from './Timeline'
import ProjectsDisplay from './ProjectsDisplay'
import './Projects.css'

export default function Projects (props) {
    return (
        <div className="projects-container">
            <Navigation />
            <div className="projects-content">
                <h1>Work</h1>
                <Timeline />
                <ProjectsDisplay />
            </div>
        </div>
    )
}

