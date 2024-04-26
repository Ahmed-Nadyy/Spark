import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import img from "./Art.png";
import "./Login.css";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: '',
        dob: '24-11-2000',
        role: '',
    });

    const navigate = useNavigate();

    const registerUser = async (userData) => {
        try {
            const response = await axios.post('https://edume-app-88352f017fde.herokuapp.com/auth/register', userData);
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.error(formData)
        // Client-side validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirm_password || !formData.dob || !formData.role) {
            console.error('All fields are required');
            return;
        }
        if (formData.password !== formData.confirm_password) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await registerUser(formData);
            console.log('Registration successful:', response);
            navigate('/signin');
            
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-7 d-flex justify-content-center align-items-center bg-light">
                <form className="p-5" onSubmit={handleSubmit}>
                    <h3 className="text-center mb-4">Register Now 😊</h3>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            placeholder="Enter Your First Name"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter Your First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter Your Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm_password" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            className="form-control"
                            placeholder="Confirm Your Password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Date Of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">
                            Role
                        </label>
                            <label for="role" className='form-label'>What is your role ?</label>
                            <select id="role"
                            name="role"
                            // value={formData.role}
                            onChange={handleChange}
                            className='form-select'

                            >
                                <option value="student" className='form-control'>student</option>
                                <option value="teacher" className='form-control'>teacher</option>
                            </select>
                    </div>
                    <button className="btn btn-primary w-100 mb-3">Sign Up</button>
                    {/* Social media sign in buttons */}
                    {/* OR */}
                    {/* Sign up link */}
                </form>
            </div>
            <div className="Register-Img col-md-5 m-0 p-0 d-flex justify-content-center">
                <img src={img} alt="LoginArt" className="w-100  m-1" />
            </div>
        </div>
    </div>
    );
}

export default Register;
