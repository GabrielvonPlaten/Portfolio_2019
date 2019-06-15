import React, { useState } from 'react';
import './Profile.sass'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Profile = ({ user }) => {

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    website: "",
    github: ""
  });

  const changeData = e => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div>
      <div className="profile-navbar">
        <ul className="navbar-list">
          <li>
            <h2>Welcome Back, {user.name}</h2>
          </li>
          <li>
            <button className="btn btn--red logout-button">Logout</button>
          </li>
        </ul>
      </div>
      <div className="profile-container">
        <form className="editor-form">
          <div className="form-division">
            <button className="btn btn--green">Submit</button>
          </div>
          <div className="form-division">
            <label>Title</label>
            <br />
            <input name="title" onChange={(e) => changeData(e)}/>
          </div>
          <div className="form-division">
            <label>Subtitle</label>
            <br />
            <input name="subtitle" onChange={(e) => changeData(e)} />
          </div>
          <div className="form-division">
            <label>Thumbnail</label>
            <br />
            <input name="thumbnailurl" onChange={(e) => changeData(e)}/>
          </div>
          <div className="form-division">
            <label>GitHub</label>
            <br />
            <input name="github" onChange={(e) => changeData(e)}/>
          </div>
          <div className="form-division">
            <label>Website</label>
            <br />
            <input name="website" onChange={(e) => changeData(e)}/>
          </div>
          <div className="form-division">
            <label>Work Content</label>
            <br />
            <div id="editorjs"></div>
          </div>
        </form>
      </div>
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
