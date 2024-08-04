import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='flex justify-between '>

            <h1
                className='font-bold text-2xl cursor-pointer' onClick={() => navigate('/')}>
                Employee Management System
            </h1>

            <button
                className='p-2 text-md rounded-md bg-gray-400' onClick={() => navigate('/emp_add')}>
                Add Employee
            </button>
            
        </div>
    )
}

export default Navbar
