import React from 'react'
import TeacherProfile from '../../Component/TeacherProfile/TeacherProfile'
import TeacherDashmid from '../../Component/TeacherDashmid/TeacherDashmid'

export default function TeacherDashboard() {
  return (
    <>
       <div className="container">
        <div className="row mt-3 h-100 ">
          <TeacherDashmid />
          <TeacherProfile />
          {/* <CourseUploadForm /> */}
          {/* <MyCoursePage /> */}
        </div>
      </div>
    </>
  )
}
