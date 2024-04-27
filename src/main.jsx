<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Redux/store';
import LayoutAPP from './Layouts/LayoutAPP';
import LayoutAuth from './Layouts/LayoutAuth';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Login from './Component/Login&register/Login';
import Register from './Component/Login&register/Register';
import ParentCourese from './Component/MyCourses/ParentCourese';
import Dash from './Pages/dash/Dash';
import Home from './Component/Home/Home';
import TeacherDashboard from './Pages/TeacherDashboard/TeacherDashboard';
import CourseUploadForm from './Component/uplaodCourse/CourseUploadForm';
import EditProfile from './Component/EditProfile/EditProfile';

const routers = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <LayoutAPP />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'Home', element: <Home /> },
      { path: 'Courses', element: <ParentCourese /> },
      { path: 'Dashboard', element: <Dash /> },
      { path: 'editProfile', element: <EditProfile /> },
      // { path: "Dashboard", element: <TeacherDashboard /> },
      { path: 'add-course', element: <CourseUploadForm /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
  {
    path: '/',
    
    element:
    <LayoutAuth />,
    children: [
      { index: true, element: <Register /> },
      { path: 'signup', element: <Register /> },
      { path: 'signin', element: <Login /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);


const RootComponent = (
  <Provider store={Store}>
    <RouterProvider router={routers} />
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(RootComponent);
