import React, { useState, useEffect } from 'react'
import './About.sass';
import apiService from '../../../api/apiService';

import GitHub from '../../../assets/Skills/github.svg';

// Components
import Skills from '../Skills/Skills';

const About = () => {
  const [gitData, setData] = useState([]);

  const langs = [
    { id: 0, name: "JavaScript"},
    { id: 1, name: "Vue"},
    { id: 2, name: "HTML"},
    { id: 3, name: "C#"},
  ]

  useEffect(() => {
    apiService.getRepos()
      .then(res => {
        localStorage.setItem('repositories', JSON.stringify(res.data))
        setData([...gitData, ...res.data])
      })
      .catch(() => {
        let storageData = JSON.parse(localStorage.getItem('repositories'))
        setData([...gitData, ...storageData])
      })
  }, []);

  
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-repos">
          <h2>Recent GitHub Activity</h2>
          <ul className="github-repos-list">
            {gitData.map((repo, index) => (
              <li className="repo__item" key={index}>
                <h2>{repo.name.replace(/_|-/gi, ' ')}</h2>
                <p>{repo.description}</p>
                <a href={"https://github.com/GabrielvonPlaten/" + repo.name} rel="noopener noreferrer" target="_blank">
                  <img 
                    className="item__link" 
                    src={GitHub} 
                    alt="Github Link"/>
                </a>
                <span className="language-name">{repo.language}</span>
            </li> 
            ))}
          </ul>
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default About
