import "./courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Map from "../../assets/3d-map-pins-gps-navigator-pin-checking-poins-3d-render-illustration 1.png"
import RedArrow from "../../assets/red-up-arrow-coin-stacks-pink-background-financial-success-growth-concept-3d-render-illustration 1.png"
import Rocket from "../../assets/rocket-launch-laptop-flying-rocket-icon-business-startup-project-concept 1.png"
import Travel from "../../assets/travel-concept-3d-illustration-airplane-flying-map-pin 1.png"
import ProblemSolving from "../../assets/3d-jigsaw-puzzle-pieces-pink-background-problem-solving-business-concept-3d-render-illustration 1.png"
import Bank from "../../assets/online-banking-icon-money-saving-bank-bundles-money-coins-floating-around-purple-background 1.png"

const Courses = () => {

    return (
        <section id="courses">
            <div className="container">
                <h1>Featured <span className="h1">Course</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et maxime consequuntur...</p>
                <div className="courseCards">
                    <div className="courseCard">
                        <img src={Map} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>Motion Graphics: Create a Nice Typography Animation</h2>
                            <div className="price-buy">
                                <span className="price">$33.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src={RedArrow} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>The Complete Financial Analyst Training & Investing</h2>
                            <div className="price-buy">
                                <span className="price">$45.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src={Rocket} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>Education Software and PHP and JS System Script</h2>
                            <div className="price-buy">
                                <span className="price">$33.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src={Travel} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>Marketing 2023: Complete Guide To Instagram Growth</h2>
                            <div className="price-buy">
                                <span className="price">$33.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src={ProblemSolving} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>Advance PHP knowledge with JS to make smart web</h2>
                            <div className="price-buy">
                                <span className="price">$33.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="courseCard">
                        <img src={Bank} />
                        <div className="cardContent">
                            <div className="stu-time">
                                <span className="students">5,957 Students</span>
                                <span className="time">01h 49m</span>
                            </div>
                            <h2>Learn 3D Modelling and Design for Beginners</h2>
                            <div className="price-buy">
                                <span className="price">$33.99</span>
                                <span className="cart"><FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnCourseDiv">
                    <button className="btnCourse">Explore Courses</button>
                </div>
            </div>
        </section>
    );
};

export default Courses;