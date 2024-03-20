import './App.css'
import Home from './Component/Home/Home.jsx'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout/HomeLayout.jsx';
function App() {

  const routes = createBrowserRouter([{
    path:'/',element : <HomeLayout />,
    children : [
    {index:true , element : <Home />},
    {path:'home' , element : <Home />},
   ],
 },
 

]);

  return (
    <>
        <RouterProvider router={routes} /> 
    </>
  )
}

export default App
