import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  return (
    <div className="project-card-container">
      <img src={project.imageUrl} alt="project" className="project-img" />
      <div>
        <div className="project-header">
          <h1 className="project-heading">{project.projectTitle}</h1>
          <div className="project-time">
            <AiFillCalendar className="project-icon" />
            <p className="project-duration">{project.duration}</p>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <a
          href={project.projectUrl}
          target="_blank"
          className="visit-link"
          rel="noreferrer"
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
