import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 


const CourseUploadForm = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCardPicture, setCourseCardPicture] = useState(null);
  const [lessons, setLessons] = useState([{ name: '', videos: [] }]);
  const [price, setPrice] = useState('');
  const [isFree, setIsFree] = useState(false);
  const navigate = useNavigate();

  const handleAddLesson = () => {
    setLessons([...lessons, { name: '', videos: [] }]);
  };

  const handleLessonNameChange = (index, value) => {
    const newLessons = [...lessons];
    newLessons[index].name = value;
    setLessons(newLessons);
  };

  const handleAddVideo = (lessonIndex, files) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].videos = files;
    setLessons(newLessons);
  };

  const handleCourseCardPictureChange = (event) => {
    const file = event.target.files[0];
    setCourseCardPicture(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', courseName);
    formData.append('description', courseDescription);
    formData.append('featuredImage', courseCardPicture);
    formData.append('lessons', JSON.stringify(lessons));
    formData.append('price', price);
    formData.append('isFree', isFree);

    try {
      const response = await axios.post('https://edume-app-88352f017fde.herokuapp.com/courses/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          
        },
      });

      // Handle successful response here (e.g., show success message, redirect)
      console.log('Course uploaded successfully:', response.data);

      // Reset form fields after successful submission
      setCourseName('');
      setCourseDescription('');
      setCourseCardPicture(null);
      setLessons([{ name: '', videos: [] }]);
      setPrice('');
      setIsFree(false);

      // Redirect to dashboard or another page
      navigate('/Dashboard');
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error uploading course:', error);
    }
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
