import React from 'react';
import TeacherCourseCard from './TeacherCourseCard';

const MyCoursePage = () => {
  // Sample course data
  const course = {
    courseName: 'Sample Course',
    courseDescription: 'This is a sample course description.',
    courseCardPicture: 'https://example.com/course-card-picture.jpg',
    price: '50',
    isFree: false,
    lessons: [
      { name: 'Lesson 1', videos: [{ name: 'Video 1' }, { name: 'Video 2' }] },
      { name: 'Lesson 2', videos: [{ name: 'Video 3' }, { name: 'Video 4' }] },
    ]
  };

  return (
    <div>
      <TeacherCourseCard {...course} />
    </div>
  );
};

export default MyCoursePage;
