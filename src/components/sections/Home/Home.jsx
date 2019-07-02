import React from 'react';
import './Home.sass';

const Home = () => {
  return (
    <div className="view-home">
      <div className="title-name">
        <h1>Gabriel von Platen</h1>
        <h3>I'm a <span className="role">{"{Web Developer}"}</span> based in Stockholm, Sweden</h3>
      </div>
      <div className="title-links">
        <ul>
          <li>
            <a className="btn btn--blue" href="https://github.com/GabrielvonPlaten" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a className="btn btn--blue" href="https://www.linkedin.com/in/gabriel-von-platen-9a89ab12a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="btn btn--blue" href="https://www.docdroid.net/eZQ3wT3/gabrielvonplaten.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home


