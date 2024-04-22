import { Navigate } from "react-router-dom";


export default function ProtectedRoutes(props)
{
  // let token = localStorage.getItem("token");
  let token = "ture";
  if (token)
  {
     return props.children;
  }
  else
  {
    return < Navigate to="/signin"/>;
  }
}