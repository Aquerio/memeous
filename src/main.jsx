import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
   
} from "react-router-dom";



import LoginPage from './components/LoginPage/LoginPage.jsx';
import Layout from './components/Layout.jsx';
import Errorpage from './components/ErrorPage.jsx';
import { SigninFormTextProvider } from './contexts/SigninFormTextContext.jsx';
import { RegisterFormTextProvider } from './contexts/RegisterFormText.jsx';


const router = createBrowserRouter([
  {
    path: "",
    element: 
    
   
<SigninFormTextProvider>
  <RegisterFormTextProvider>
      <LoginPage/>
      </RegisterFormTextProvider>
    </SigninFormTextProvider>
    ,
    errorElement : <Errorpage/>,


   
  },
  {

    path: "/user",
    element: <Layout/>,
    errorElement : <Errorpage/>,

    children : [

      {

        path:"feed", 
        element:   

        
          
         <></>


      },
     
        
    ] 
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
