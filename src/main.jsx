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
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "signup_login",
    element: 
    
  <AuthContextProvider>
<SigninFormTextProvider>
  <RegisterFormTextProvider>
      <LoginPage/>
      </RegisterFormTextProvider>
    </SigninFormTextProvider>
   </AuthContextProvider>  ,
    errorElement : <Errorpage/>,


   
  },
  {

    path: "",
    element: <AuthContextProvider><PrivateRoute><Layout/></PrivateRoute></AuthContextProvider>,
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
