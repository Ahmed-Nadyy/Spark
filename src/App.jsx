import './App.css'
import Home from './Component/Home/Home.jsx'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout/HomeLayout.jsx';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.jsx';
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
      <Provider store={Store}>
        <RouterProvider router={routes} /> 
      </Provider>
    </>
  )
}

export default App
