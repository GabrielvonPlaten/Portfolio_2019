import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Login.sass';

// Actions
import { login } from '../../redux/actions/authActions';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData; 

  const loginHandle = e => {
    e.preventDefault()
    login(email, password)
  }

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  if (isAuthenticated) {
    return <Redirect to="/profile" />
  }

  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={loginHandle}>
          <h2>Admin Login</h2>
          <div className="form-division">
            <label>Email</label><br />
            <input name="email" onChange={e => onChange(e)} type="text"></input>
          </div>
          <div className="form-division">
            <label>Password</label><br />
            <input name="password" onChange={e => onChange(e)} type="password"></input>
          </div>
          <div className="form-division">
            <button className="btn btn--green">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.protoTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
