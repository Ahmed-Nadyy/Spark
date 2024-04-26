import React, { useState } from 'react';
import { Link  } from "react-router-dom";
// import { useHistory } from 'react-router-dom';


const CourseUploadForm = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCardPicture, setCourseCardPicture] = useState(null);
  const [lessons, setLessons] = useState([{ name: '', videos: [] }]);
  const [price, setPrice] = useState('');
  const [isFree, setIsFree] = useState(false);

  // const history = useHistory();

  const addCourse = (courseData) => {
    setCourses([...courses, courseData]);
  };
  
  const handleAddLesson = () => {
    setLessons([...lessons, { name: '', videos: [] }]);
  };

  const handleLessonNameChange = (index, value) => {
    const newLessons = [...lessons];
    newLessons[index].name = value;
    setLessons(newLessons);
  };

  const handleAddVideo = (lessonIndex, video) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].videos.push(video);
    setLessons(newLessons);
  };

  const handleCourseCardPictureChange = (event) => {
    const file = event.target.files[0];
    setCourseCardPicture(file);
  };

  const handleSubmit = (event) => {
    // console.log(courses);
    event.preventDefault();
    const courseData = {
      courseName,
      courseDescription,
      courseCardPicture,
      lessons,
      price,
      isFree,
    };
    addCourse(courseData);
    
    // history.push({
    //   pathname: '/teacher-dashboard',
    //   state: { courses: [...courses, courseData] },
    // });
    // Reset form fields after submission if needed
    setCourseName('');
    setCourseDescription('');
    setCourseCardPicture(null);
    setLessons([{ name: '', videos: [] }]);
    setPrice('');
    setIsFree(false);
  };

  return (
    <div className="container w-50">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="courseName" className="form-label">Course Name</label>
        <input
          type="text"
          className="form-control"
          id="courseName"
          placeholder="Enter course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="courseDescription" className="form-label">Course Description</label>
        <textarea
          className="form-control"
          id="courseDescription"
          rows={3}
          placeholder="Enter course description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="courseCardPicture" className="form-label">Course Card Picture</label>
        <input
          type="file"
          className="form-control"
          id="courseCardPicture"
          onChange={handleCourseCardPictureChange}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isFree"
          checked={isFree}
          onChange={(e) => setIsFree(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="isFree">Is Free?</label>
      </div>

      {!isFree && (
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter course price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      )}

      {lessons.map((lesson, index) => (
        <div key={index}>
          <div className="mb-3">
            <label className="form-label">Lesson {index + 1} Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={`Enter lesson ${index + 1} name`}
              value={lesson.name}
              onChange={(e) => handleLessonNameChange(index, e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Videos for Lesson {index + 1}</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={(e) => handleAddVideo(index, e.target.files)}
            />
          </div>
        </div>
      ))}
      

       <div className="d-flex my-5">
       <Link to="/Dashboard"  className="btn btn-primary" style={
         {
          width:"auto",
          height:"40px",
        }
      } >back</Link>

      <button type="button" className="btn btn-primary mb-3 mx-3" style={
        {
          width:"auto",
          height:"40px",
        }
      } onClick={handleAddLesson}>Add Lesson</button>

      <button type="button" className="btn btn-primary " style={
         {
          width:"auto",
          height:"40px",
        }
      }  onClick={handleSubmit}>Upload Course</button>
      
      </div>
    </form>
    </div>
  );
};

export default CourseUploadForm;
