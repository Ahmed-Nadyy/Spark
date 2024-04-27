import React from 'react';

const TeacherCourseCard = ({ courseName, courseDescription, courseCardPicture, price, isFree, lessons }) => {
  return (
    <div className="card square-card">
      <div className="card-img-container">
        <img src={courseCardPicture} className="card-img-top" alt="Course Card" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        <p className="card-text">{courseDescription}</p>
        <p className="card-text">{isFree ? 'Free' : `Price: $${price}`}</p>
        <ul className="list-group">
          {lessons.map((lesson, index) => (
            <li key={index} className="list-group-item">
              <strong>Lesson {index + 1}:</strong> {lesson.name}
              <ul>
                {lesson.videos.map((video, videoIndex) => (
                  <li key={videoIndex}>{video.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherCourseCard;
