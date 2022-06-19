import React from 'react'

export default function Login({ isShowLogin }) {
    
  return (
    <div className={`show ${!isShowLogin ? "active" : "inactive"}`}>
    <div className="login-form">
    <form method="post">
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block my-3">Log in</button>
        </div>
        <div className="clearfix">
            <span>Don't have an account? </span><a href="#"> Sign Up here</a>
        </div>        
    </form>
</div>
</div>
  )
}
