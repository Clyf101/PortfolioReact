import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { School } from '@mui/icons-material';
import "react-vertical-timeline-component/style.min.css";

function Education() {
  const timelineElements = [
    {
      date: '2017',
      school: 'Kean High School',
      align: 'left'
    },
    {
      date: '2018',
      school: 'University of California, Los Angeles',
      align: 'right'
    },
    {
      date: '2019',
      school: 'Harvard University',
      align: 'left'
    },
    {
      date: '2020',
      school: 'Stanford University',
      align: 'right'
    }
  ];

  return (
    <div className="education-container">
      <VerticalTimeline linecolor="#3e497a">
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--education ${element.align === 'left' ? 'left' : 'right'}`}
            date={element.date}
            iconStyle={{ background: "#3e497a", color:"#fff" }}
            icon={<School />}
          > 
            <h3 className='vertical-timeline-element-title'> School...</h3>
            <p>{element.school}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
