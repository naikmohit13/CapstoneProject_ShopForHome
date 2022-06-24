import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

export default function Navbar1() {

    $(document).ready(function() {
        $("#sidebarCollapse").on("click", function() {
          $("#sidebar").addClass("active");
        });
      
        $("#sidebarCollapseX").on("click", function() {
          $("#sidebar").removeClass("active");
        });
      
        $("#sidebarCollapse").on("click", function() {
          if ($("#sidebar").hasClass("active")) {
            $(".overlay").addClass("visible");
            console.log("it's working!");
          }
        });
      
        $("#sidebarCollapseX").on("click", function() {
          $(".overlay").removeClass("visible");
        });
      });

      $(".category-li").on("click",function() {})
  return (
  <>
    <div>
        <div className="overlay"></div>

<div className="utility-nav d-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <p className="small"><i className="bx bx-envelope"></i> logo@example.com | <i className="bx bx-phone"></i> +91-9876543210
        </p>
      </div>

      <div className="col-12 col-md-6 text-right">
        <p className="small">Free shipping on total of $99 of all products</p>
      </div>
    </div>
  </div>
</div>

<nav className="navbar navbar-expand-md navbar-light bg-light main-menu" style={{boxShadow:"none"}}>
  <div className="container">

    <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
                <i className="bx bx-menu icon-single"></i>
            </button>

    <a className="navbar-brand" href="#">
      <h4 className="font-weight-bold">Logo</h4>
    </a>

    {/* <ul className="d-flex list-unstyled">
      <li className="nav-item">
        <a className="btn btn-link m" href="#"><i className="bx bxs-cart bx-sm"></i></a>
      </li>
      <li className="nav-item">
        <a className="btn btn-link" href="#"><i className="bx bx-heart bx-sm"></i></a>
      </li>
    </ul> */}

    <div className="collapse navbar-collapse">
      <form className="d-flex form-inline my-2 my-lg-0 mx-auto">
        <input id="search_bar" className="form-control rounded-0" type="search" placeholder="Search for products..." aria-label="Search"/>
        <button className="btn btn-success rounded-0 my-2 my-sm-0" type="submit"><i className='bx bx-search'></i></button>
      </form>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="btn btn-link" href="#"><i className="bx bxs-cart bx-sm icon-single"></i></a>
        </li>
        <li>
            <a className="btn btn-link" href="#"><i class='bx bx-heart bx-sm'></i><span className="badge badge-danger">3</span></a>
        </li>
        <li className="nav-item ml-md-3">
          <Link className="btn btn-primary" to="/signin">Register</Link>
          <Link className="btn btn-primary mx-3" to="/login">Login</Link>

        </li>
      </ul>
    </div>

  </div>
</nav>


<nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Schools</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Publishers</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="search-bar d-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form className="d-flex form-inline mb-3 mx-auto">
          <input id="search_bar" className="form-control rounded-0" type="search" placeholder="Search for products..." aria-label="Search"/>
          <button className="btn btn-success" type="submit"><i className="bx bx-search"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>

<nav id="sidebar">
  <div className="sidebar-header">
    <div className="container">
      <div className="row">
        <div className="col-10  d-flex justify-content-start">
          <Link className="btn btn-primary" to="/signin">Register</Link>
          <Link className="btn btn-primary mx-3" to="/login">Login</Link>
        <Link to="/" className='btn btn-link'><i className="bx bxs-cart bx-sm"></i></Link>
        <Link to="/" className="btn btn-link"><i className="bx bx-heart bx-sm"></i></Link>
        </div>



        <div className="col-2">
          <button type="button" id="sidebarCollapseX" className="btn btn-link">
                            <i className="bx bx-x icon-single"></i>
                        </button>
        </div>
      </div>
    </div>
  </div>

  <ul className="list-unstyled components links">
    <li className="active">
      <a href="#"><i className="bx bx-home mr-3"></i> Home</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-carousel mr-3"></i> Products</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-book-open mr-3"></i> Schools</a>
    </li>
    <li>
      <a href="#"><i className="bx bx-crown mr-3"></i> Publishers</a>
    </li>
    {/* <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bx bx-help-circle mr-3"></i>
                    Support</a>
      <ul className="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a href="#">Delivery Information</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li> */}
      {/* </ul>
    </li> */}
    <li>
      <a href="#"><i className="bx bx-phone mr-3"></i> Contact</a>
    </li>
  </ul>


  <h6 className="text-uppercase mb-1">Categories</h6>
  <ul className="list-unstyled components mb-3">
    <li id='category-li'>
      <Link to="/login">Category</Link>
    </li>
    <li>
      <Link to="/">Category</Link>
    </li>
    <li>
      <Link to="/">Category</Link>
    </li>
    <li>
      <Link to="/">Category</Link>
    </li>
    <li>
      <Link to="/">Category</Link>
    </li>
    <li>
      <Link to="/">Category</Link>
    </li>
  </ul>


  <ul className="social-icons">
    <li><a href="#" target="_blank" title=""><i className="bx bxl-facebook-square"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-twitter"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-linkedin"></i></a></li>
    <li><a href="#" target="_blank" title=""><i className="bx bxl-instagram"></i></a></li>
  </ul>

</nav>
    </div>
  </>
  )
}
