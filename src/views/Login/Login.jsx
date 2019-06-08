import React from 'react'
import './Login.sass';


const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <form>
          <h2>Admin Login</h2>
          <div className="form-division">
            <label>Email</label><br />
            <input type="text"></input>
          </div>
          <div className="form-division">
            <label>Password</label><br />
            <input type="password"></input>
          </div>
          <div className="form-division">
            <button className="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
