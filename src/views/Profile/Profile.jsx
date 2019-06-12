import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const Profile = ({ user }) => {

  return (
    <div>
      <h2>Welcome Back, {user.name}</h2>
    </div>
  )
}

Profile.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Profile)
