import "./courses.css";
import CourseCard from "./courseCard";
import courses from "./coursesData";

const Courses = () => {

    return (
        <section id="courses-k">
            <div className="container-k">
                <h1>Featured <span className="h1-k">Course</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et maxime consequuntur...</p>
                <div className="courseCards-k">
                    {courses.map(({ imgPath, studentNumber, courseTime, courseName, coursePrice }, index) => (
                        <CourseCard
                            key={index}
                            imgPath={imgPath}
                            studentNumber={studentNumber}
                            courseTime={courseTime}
                            courseName={courseName}
                            coursePrice={coursePrice}
                        />
                    ))}
                </div>
                <div className="btnCourseDiv-k">
                    <button className="btnCourse-k">Explore Courses</button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
