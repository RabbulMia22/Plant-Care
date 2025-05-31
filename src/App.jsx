import { createBrowserRouter, RouterProvider } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddPlant from "./pages/AddPlant"
import AllPlants from "./pages/AllPlants"
import MyPlants from "./pages/MyPlants"

function App() {
  const router = createBrowserRouter([
    {
     element: <Layout />,
     children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'addplant',
        element: <AddPlant />
      },
      {
        path: 'allplant',
        element: <AllPlants />
      },
      {
        path: 'myplants',
        element: <MyPlants />
      },
     ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
