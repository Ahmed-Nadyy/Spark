import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function ProtectedRoutes(props)
{ 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // let token = localStorage.getItem("token");
  // let token = "ture";
  if (isLoggedIn)
  {
     return props.children;
  }
  else
  {
    return < Navigate to="/signin"/>;
  }
}