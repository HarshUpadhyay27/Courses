import React from "react";
import data from "./data";
import Rating from "./Rating";

const CourseDetails = (props) => {
  const course = data.course.find((x) => x._id === props.match.params.id);
  console.log(course);

  return (
    <div className="course-details">
      <div className="details-container">
        <h1>{course.name}</h1>
        <p>{course.descripition}</p>
        <Rating rating={course.rating} numReviews={course.numReviews} />
        <p>Created By: {course.createdBy}</p>
        <div className="info">
          <h3>This course includes:</h3>
          <ul>
            <li>
              <i class="fas fa-file-video"></i> {course.videos} total videos{" "}
            </li>
            <li>
              <i class="far fa-clock"></i> {course.time} total hours
            </li>
            <li>
              <i class="fas fa-user-graduate"></i> {course.studentEndroll}{" "}
              students enrolled now
            </li>
          </ul>
        </div>
      </div>
      <div className="img-container">
        <img src={course.image} alt="..."></img>
        <div className="details">
          <h1>&#8377; {course.price}</h1>
          <button className="btn">Add To Cart</button>
          <button className="btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
