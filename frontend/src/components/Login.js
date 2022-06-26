import React ,{ useState , useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import {login} from '../actions/auth_action'
import { login_user } from '../actions/user_auth_action'
// import { isUserLoggedIn } from '../actions/auth_action'

export default function Login({ path }) {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState("");
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
                email,password
        }

        if(path === "/login")
            dispatch(login_user(user))
        else{
            dispatch(login(user))

            if(auth.authenticate){
                return <Navigate to="/admin/dashboard"/>
            }
        }
    }

    

  return (
    <div className="login-form">
    <form onSubmit={userLogin}>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block my-3">Log in</button>
        </div>
        <div className="clearfix">
            <span>Don't have an account? </span><Link to="/signin">Sign Up here</Link>
        </div>        
    </form>
</div>
  )
}
