import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
      {timelineItemsList.map(eachItem => {
        if (eachItem.categoryId === 'PROJECT') {
          return <ProjectTimelineCard details={eachItem} key={eachItem.id} />
        }
        return <CourseTimelineCard details={eachItem} key={eachItem.id} />
      })}
    </Chrono>
  )
}

export default TimelineView
