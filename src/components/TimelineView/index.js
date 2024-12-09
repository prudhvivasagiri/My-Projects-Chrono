import {Chrono} from 'react-chrono'
import './index.css'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each =>
            each.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={each.id} course={each} />
            ) : (
              <ProjectTimelineCard key={each.id} project={each} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
