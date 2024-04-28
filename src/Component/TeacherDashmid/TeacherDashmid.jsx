import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TeacherCourseCard from '../TeacherCourseCards/TeacherCourseCard';
import './TeacherDashmid.css';

function TeacherDashmid() {
  const location = useLocation();
  const { courses } = location.state || { courses: [] };
  const [isWide, setIsWide] = useState(window.innerWidth > 685);

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 685);
    }

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${isWide ? 'col-9' : 'col-12'}`}>
      <div className='w-100 box'>
        <p className='text-white'>ONLINE COURSES</p>
        <b>You want to add new courses?</b>
        <div className='p-2 join'>
          <Link to='/add-course' className='text-decoration-none text-white'>
            <span>Add course &nbsp;</span>
          </Link>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          {/* Row might be used for future content or layout adjustments */}
        </div>
      </div>
      <hr />
      <div className='d-flex flex-row'>
        <h3>Your Courses</h3>
        <div className='p-2 join-teacher'>
          <Link to='/add-course' className='text-decoration-none text-white'>
            <span>Add course &nbsp;</span>
          </Link>
        </div>
      </div>
      <div className='product-list mt-4 align-content-center text-center'>
        {/* Render TeacherCourseCard for each course */}
        {courses.map((course, index) => (
          <TeacherCourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default TeacherDashmid;
