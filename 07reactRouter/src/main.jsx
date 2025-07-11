import { React,StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';

import './index.css'

//It helps us monitor how users move between pages and objects in single page applications
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {path:"/Github",   
        element:<Github/>
      }
    ] 
    }
    ]
    )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
