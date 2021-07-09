import React from 'react'
import Course from './Course'
import data from './data'

const CourseScreen = () => {
    return (
        <div className="containers">
            {
                data.course.map(course=>(
                    <Course course={course} key={course._id} />
                ))
            }
        </div>
    )
}

export default CourseScreen
