import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CourseCard = (props) => {
    return (
        <div className="courseCard-k">
            <img src={props.imgPath} />
            <div className="cardContent-k">
                <div className="stu-time-k">
                    <span className="students-k">{props.studentNumber} Students</span>
                    <span className="time-k">{props.courseTime}</span>
                </div>
                <h2>{props.courseName}</h2>
                <div className="price-buy-k">
                    <span className="price-k">{props.coursePrice}</span>
                    <span className="cart-k"><FontAwesomeIcon icon={faShoppingCart} /></span>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
