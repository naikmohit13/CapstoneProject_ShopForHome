import React , {useEffect} from 'react'
import {Routes, Route, Link , Navigate} from 'react-router-dom'
import Header from '../Header/Header'
import Login from '../Login'
import Register from '../Signin';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from '../HOC/privateRoute';
import Dashboard from './Dashboard';
import { isUserLoggedIn } from '../../actions';

export default function Layout() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  
  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
})

if(auth.authenticate){
  return <Navigate to="/admin/dashboard"/>
}

  return (
    <>
    <div className="container mt-5 border shadow">
    <h1 className="mx-5 mt-5 bg-grey">Welcome to Admin dashboard</h1>
    <Link className="btn btn-primary mx-3" to="login">Signin</Link>
    <Link className="btn btn-primary m-3" to="register">SignUp</Link>
    
    <Routes>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
       
    </Routes>
    </div>
    </>
  )
}
