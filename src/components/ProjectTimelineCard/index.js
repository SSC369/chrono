import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details
  return (
    <div className="project-card">
      <img src={imageUrl} alt={projectTitle} className="website-image" />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
