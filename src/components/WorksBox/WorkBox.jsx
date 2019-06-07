import React from 'react';
import { Link } from 'react-router-dom'
import './WorkBox.sass';

const WorkBox = () => {
  let bgImage = 'https://i.imgur.com/zJwMX0U.jpg'

  return (
    <div>
      <div className="side-borders"></div>
      <Link to="/work/id/slug" className="workBox-link">
        <div
          style={{backgroundImage: 'url(' + bgImage + ')'}} 
          className="workBox">
          <div className="darkenBackground"></div>
          <div className="work-title">
            <h3>Work Title</h3>
            <p>This is the subtitle</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WorkBox
