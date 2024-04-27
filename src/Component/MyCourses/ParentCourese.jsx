import { useState, useEffect } from 'react';
import Lift from "./Lift";
import Half from "./Half";
import Right from "./Right";
import "./MyCourses.css";

export default function ParentCourses() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 ?
        <div className="half container">
          <Half />
        </div> :
        <div className="coursesDash">
          <div className="container ">
            <div className="d-flex gap-4">
              <div>
                <Lift />
              </div>
              <div>
                <Half />
              </div>
              <div className='right-a'>
                <Right />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
