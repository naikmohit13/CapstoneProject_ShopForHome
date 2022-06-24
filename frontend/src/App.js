import React,{ useState ,useEffect } from 'react'
import './App.css';
import User from './components/User/User'
import Layout from './components/Admin/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/HOC/privateRoute';
import Dashboard from './components/Admin/Dashboard';
import { useDispatch , useSelector } from 'react-redux'
import { isUserLoggedIn } from './actions/auth_action'
function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  
  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
})

  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<User/>}/>
                <Route exact path="/admin/*" element={<Layout/>}/>
                <Route element={<PrivateRoute/>}>
                      <Route path='/admin/dashboard' element={<Dashboard/>}/>
                </Route>
            </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
