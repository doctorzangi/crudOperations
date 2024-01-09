import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Table from '../Components/Table'
import User from '../Pages/User'


const RouteContent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </div>
    )
}

export default RouteContent