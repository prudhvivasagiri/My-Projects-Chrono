import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {course} = props
  return (
    <div className="course-container">
      <div className="course-heading-container">
        <h1 className="heading">{course.courseTitle}</h1>
        <div className="course-time-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{course.duration}</p>
        </div>
      </div>
      <p className="description">{course.description}</p>
      <div className="tags-container">
        {course.tagsList.map(each => (
          <p key={each.id} className="tag">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
