import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './WorkBox.sass';

const WorkBox = () => {
  let bgImage = 'https://i.imgur.com/zJwMX0U.jpg'

  return (
    <div>
      <div className="side-borders"></div>
      <div
        style={{backgroundImage: 'url(' + bgImage + ')'}} 
        className="workBox">
        <div className="darkenBackground"></div>
        <div className="work-title">
          <h3>Work Title</h3>
          <p>This is the subtitle</p>
          <ul className="links-list">
            <li>
              <a title="Visit Live" href="https://website.com" target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              <a title="GitHub Repo" href="https://githubrepo.com" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <Link title="Read more..." to="/works/1/wow-comparator">More...</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkBox
