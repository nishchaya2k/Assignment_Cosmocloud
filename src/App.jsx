import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='w-sceeen h-screen p-4 px-6'>
            <Navbar />
            <main>
                <Outlet /> {/* This renders the child routes */}
            </main>
        </div>
    )
}

export default App
