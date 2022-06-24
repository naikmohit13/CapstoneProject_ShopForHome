import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import './style.css'
import { signout } from '../../actions/auth_action';
export default function Dashboard() {

  const dispatch = useDispatch()

  const logout = () => {
      dispatch(signout());
  }

  return (
    <div className="mx-0">

<nav className="container-fluid navbar navbar-expand-lg bg-light d-flex justify-content-between mx-0">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/admin">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="d-flex">

      <span><Link to="/admin/login" onClick={logout}>LogOut</Link></span>
      {/* <button className="btn btn-outline-success mx-3" type="submit"><Link  to="./admin/register">SignUp</Link></button> */}
       
      </div>
    </div>
  </div>
</nav>

    <div className="row">
      <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-2">
      <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>/ */}
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
      </div>
      </div>
    </div>
  )
}
