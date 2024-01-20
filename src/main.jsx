import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import JobDetails from './componenets/JobDetails/JobDetails';
import AppliedJobs from './componenets/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/applied",
        element: <AppliedJobs/>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
