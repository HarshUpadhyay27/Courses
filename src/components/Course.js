import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating';

const Course = ({course}) => {
    return (
        <div className="card">
            <Link to={`course/${course._id}`}>
            <div className="card-img">
                <img src={course.image} alt="..."/>
            </div>
            <div className="card-div">
                <h1 className="card-title">
                    {course.name}
                </h1>
                <p>{course.createdBy}</p>
                <Rating rating={course.rating} numReviews={course.numReviews} />
                <strong>&#8377;{course.price}</strong>
            </div>
            </Link>
        </div>
    )
}

export default Course
