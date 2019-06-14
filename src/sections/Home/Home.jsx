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
            <a className="btn btn--blue" href="#work" target="_blank">Work</a>
          </li>
          <li>
            <a className="btn btn--blue" href="#about" target="_blank">About</a>
          </li>
          <li>
            <a className="btn btn--blue" href="#contact" target="_blank">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home


