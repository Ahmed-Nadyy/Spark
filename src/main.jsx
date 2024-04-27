import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Redux/Store';
import LayoutAPP from './Layouts/LayoutAPP';
import LayoutAuth from './Layouts/LayoutAuth';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Login from './Component/Login&register/Login';
import Register from './Component/Login&register/Register';
import ParentCourese from './Component/MyCourses/ParentCourese';
import Dash from './Pages/dash/Dash';
import Home from './Component/Home/Home';
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
      { path: 'Dashboard', element: <Dash showQuizzies={false}/> },
      { path: "Quizzies", element: <Dash showQuizzies={true}/> },
      { path: 'editProfile', element: <EditProfile /> },
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

// Render the RootComponent using createRoot
ReactDOM.createRoot(document.getElementById('root')).render(RootComponent);
