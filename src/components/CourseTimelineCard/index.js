import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details
  return (
    <div className="course-card">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="eachTag" key={eachTag.id}>
            {eachTag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
