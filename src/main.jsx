import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.jsx";

import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Login from "./Component/Login&register/Login.jsx";
import Register from "./Component/Login&register/Register.jsx";
import LayoutAPP from "./Layouts/LayoutAPP.jsx";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes.jsx";
import LayoutAuth from "./Layouts/LayoutAuth.jsx";
import ParentCourese from "./Component/MyCourses/ParentCourese.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Home from "./Component/Home/Home.jsx";
import Groups from "./Component/Forum/Groups.jsx";

let routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <LayoutAPP />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Courses", element: <ParentCourese /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Forum", element: <Groups /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      { index: true, element: <Register /> },
      { path: "signup", element: <Register /> },
      { path: "signin", element: <Login /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={routers} />
  </Provider>
);
