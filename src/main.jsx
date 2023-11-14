import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddMilks from './Conponents/AddMilks.jsx';
import UpdateMilks from './Conponents/UpdateMilks.jsx';
import SingUp from './Conponents/SingUp.jsx';
import SingIn from './Conponents/SingIn.jsx';
import AuthProvide from './Providers/AuthProvide.jsx';
import Users from './Conponents/Users.jsx';
import UpdateUser from './Conponents/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('https://server-milks-shop.vercel.app/milks')
  },
  {
    path:"/addmilks",
    element:<AddMilks></AddMilks>
  },
  {
    path:"/update/:id",
    element:<UpdateMilks></UpdateMilks>,
    loader:({params}) => fetch(`  https://server-milks-shop.vercel.app/milks/${params.id}`)
  },
  {
    path:"/singup",
    element:<SingUp></SingUp>
  },
  {
    path:"/singin",
    element:<SingIn></SingIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:() => fetch('  https://server-milks-shop.vercel.app/user')
  },
  {
    path:"/updateUser/:user",
    element:<UpdateUser></UpdateUser>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
        <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>,
)
