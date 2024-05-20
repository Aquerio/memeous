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
import HomePage from './components/Home/HomePage.jsx';
import Search from './components/Search/Search.jsx';
import GroupsComponen from './components/Groups/GroupsComp.jsx';
import MyGroupPage from './components/MyGroupPage/MyGroupPage.jsx';
import { ShowGrpInMenuProvider } from './contexts/ShowGrpInMenuContext.jsx';
import PublicGroupPage from './components/PublicGroup/PublicGroup.jsx';
import JoinedGroups from './components/JoinedGroups/JoinedGroups.jsx';


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
    element:  <AuthContextProvider><PrivateRoute><ShowGrpInMenuProvider><Layout/></ShowGrpInMenuProvider></PrivateRoute></AuthContextProvider>,
    errorElement : <Errorpage/>,

    children : [

      {

        path:"", 
        element: <HomePage/>,
        loader: () => fetch("/feedPosts.json")

        
      },

      {

        path:"groups", 
        element: <GroupsComponen/>,
        loader: () => fetch("/feedPosts.json"),

        

      
         
          
        
      },

      {

          path: "groups/mygroups",
            element: <MyGroupPage/>,
            loader: () => fetch("/feedPosts.json"),

        
      },
      {

        path: "groups/publicgroups",
          element: <PublicGroupPage/>,
          loader: () => fetch("/feedPosts.json"),

      
    },

    {

      path: "groups/joinedgroups",
        element: <JoinedGroups/>,
        loader: () => fetch("/feedPosts.json"),

     },

      {

        path:"search", 
        element: <Search/>

        
      },
     
        
    ] 
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
