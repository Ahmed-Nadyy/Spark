import "./hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Img from "../../assets/logohero.png"
import Instructor from "../../assets/Group 10000150065.png"
import Student from "../../assets/GGroup 1000015006.png"
import Video from "../../assets/Group 10000150007.png"
import User from "../../assets/Frame 67.png"

const Hero = () => {

    return (
        <section id="hero">
            <div className="container">
                <div className="left">
                    <h5>SUCCESSFUL COACHES ARE VISIONARIES</h5>
                    <p className="b-p">Good <span>coaching</span> is good teaching & nothing else.</p>
                    <div className="btns">
                        <button className="heroBtn">View Courses</button>
                        <button className="heroBtn2">Get a Free Consultation</button>
                    </div>
                    <form className="search">
                        <input id="search" type="search" placeholder="what do you want to learn today?" />
                        <button className="searchBtn" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button>
                    </form>
                </div>
                <div className="right">
                    <h4>Ronald Richards</h4>
                    <p className="text">In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information.</p>
                    <div className="stars">
                        <span>4.9</span>
                        <span className="awsomeIcons"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></span>
                    </div>
                </div>
                <div className="img">
                    <img width="90%" height="100%" src={Img} />
                </div>
            </div>
            <div className="cards">
                <div className="contain">
                    <div className="card">
                        <div className="pic">
                            <img width="50px" src={Instructor} />
                        </div>
                        <div className="info">
                            <h3>300</h3>
                            <p>Instructor</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="pic">
                            <img width="50px" src={Student} />
                        </div>
                        <div className="info">
                            <h3>20,000+</h3>
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="pic">
                            <img width="50px" src={Video} />
                        </div>
                        <div className="info">
                            <h3>10,000+</h3>
                            <p>Video</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="pic">
                            <img width="50px" src={User} />
                        </div>
                        <div className="info">
                            <h3>1,00,000+</h3>
                            <p>User’s</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;