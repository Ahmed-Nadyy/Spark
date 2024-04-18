import img from "./Art.png";
import iconGoogle from "./Google.png";
import iconFacebook from "./Facebook.png";
import "./Login.css"

export default function Register() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 d-flex justify-content-center align-items-center bg-light">
                    <form className="p-5">
                        <h3 className="text-center mb-4">Register Now 😊</h3>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="form-control"
                                placeholder="Enter Your First Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="form-control"
                                placeholder="Enter Your Last Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Your Password"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Confirm Your Password"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">
                                Date Of Birth
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-primary w-100 mb-3">Sign Up</button>
                        <div className="mt-3 text-center">
                            <div
                                style={{
                                    borderTop: "1px solid #ccc",
                                    width: "100%",
                                    margin: "10px 0px 30px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "0",
                                }}
                            >
                                <span
                                    className="or-text heading-font-l"
                                    style={{ background: "white" }}
                                >
                                    OR
                                </span>
                            </div>
                        </div>

                        <button className="btn btn-outline-success w-100 mb-3">
                            <img
                                style={{ width: "20px", marginRight: "10px" }}
                                src={iconGoogle}
                                alt="Google Icon"
                                className="icon"
                            />
                            Sign in with Google
                        </button>

                        <button className="btn btn-outline-primary w-100 mb-3">
                            <img
                                style={{ width: "20px", marginRight: "10px" }}
                                src={iconFacebook}
                                alt="Facebook Icon"
                                className="icon"
                            />
                            Sign in with Facebook
                        </button>
                        <p className="text-center">
                            Dont have an account?{" "}
                            <a href="#" className="signup-link">
                                Sign in
                            </a>
                        </p>

                    </form>
                </div>
                <div className="Register-Img col-md-5 m-0 p-0 d-flex justify-content-center">
                    <img src={img} alt="LoginArt" className="w-100  m-1" />
                </div>
            </div>
        </div>
    );
}
