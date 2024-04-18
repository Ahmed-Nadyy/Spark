import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.jsx';
import HomeLayout from "./Layouts/HomeLayout/HomeLayout.jsx"
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import ParentCourses from './Component/MyCourses/ParentCourese';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Login from './Component/Login&register/Login.jsx';
import Register from './Component/Login&register/Register.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/courses",
    element: <ParentCourses />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={routes} />
  </Provider>
)