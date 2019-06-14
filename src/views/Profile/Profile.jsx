import React from 'react';
import './Profile.sass'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';

const Profile = ({ user }) => {
  const editor = new EditorJS({
    holderId: 'editorjs',
    tools: {
      header: {
        class: Header,
        inlineToolBar: ['link']
      },

      list: {
        class: List,
        inlineToolbar: ['link', 'bold']
      },

      embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
          services: {
            youtube: true,
            coub: true,
          }
        }
      },

      image: {
        class: SimpleImage,
      }
    },
  })

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
            <label>Title</label>
            <br />
            <input name="title"/>
          </div>
          <div className="form-division">
            <label>Subtitle</label>
            <br />
            <input name="subtitle"/>
          </div>
          <div className="form-division">
            <label>Thumbnail</label>
            <br />
            <input name="thumbnailurl"/>
          </div>
          <div className="form-division">
            <label>Work Content</label>
            <br />
            <div id="editorjs"></div>
          </div>
          <div className="form-division">
            <button className="btn btn--green">Submit</button>
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
