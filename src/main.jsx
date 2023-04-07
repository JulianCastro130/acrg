import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Form from './Formulario';
import Succes from './Succes';
import Pay from './Pay';
import MethodPay from './MethodPay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/methodPay",
    element: <MethodPay />,
  },
  {
    path: "/pay",
    element: <Pay />,
  },
  {
    path: "/succes",
    element: <Succes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
