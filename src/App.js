import React, { PureComponent } from 'react'
import { About } from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Layout from './Components/Layout/Layout';









const myRouter = createBrowserRouter(
  [

    {
      path: "/", element: <Layout />, children:
        [
          { index:true, element:<Home/> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <Error /> },
        ]
    }


  ]
)

class App extends PureComponent {


  render() {
    return <>
      {/* <Footer/> */}
      {/* <About /> */}
      {/* <Navbar/> */}
      {/* <Contact/> */}
      {/* <Portfolio/> */}
      {/* <Home/> */}
      {/* <Error/> */}


      <RouterProvider router={myRouter} />
    </>
  }
}

export default App