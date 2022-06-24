import React , { useEffect , useState } from 'react'
import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { signup } from '../actions/admin_action'
export default function Signin() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!user.loading) {
  //     setFirstName("");
  //     setLastName("");
  //     setEmail("");
  //     setPassword("");
  //   }
  // }, [user.loading]);

  const signUp = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  }

  if(auth.authenticate){
    return <Navigate to="/admin/dashboard"/>
}

  return (
    <div class="signup-form" onSubmit={signUp}>
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required="required"/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="required"/>
        </div>
		{/* <div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div> */}
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
            <div class="text-center mt-2">Already have an account? <Link to="/login">Sign Up here</Link></div>
        </div>
    </form>
</div>
  )
}
