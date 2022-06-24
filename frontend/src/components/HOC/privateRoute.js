import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute(props) {

    const token = window.localStorage.getItem('token');

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page

    return token ? <Outlet /> : <Navigate to="/admin/login" />;
    
}
