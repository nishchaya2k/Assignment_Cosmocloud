import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeAdd from './pages/EmployeeAdd';
import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true, // This will render EmployeeList at the root path
                element: <EmployeeList />,
            },
            {
                path: "emp_details/:id",
                element: <EmployeeDetails />,
            },
            {
                path: "emp_add",
                element: <EmployeeAdd />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
