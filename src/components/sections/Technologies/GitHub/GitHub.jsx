import React, { useState, useEffect } from "react";
import "./GitHub.sass";
import apiService from "../../../../api/apiService";

import github from "../../../../assets/Skills/github.svg";

// Components
import Skills from "../Skills/Skills";

const GitHub = () => {
  const [gitData, setData] = useState([]);

  useEffect(() => {
    apiService
      .getRepos()
      .then(res => {
        localStorage.setItem("repositories", JSON.stringify(res.data));
        setData([...gitData, ...res.data]);
      })
      .catch(() => {
        let storageData = JSON.parse(localStorage.getItem("repositories"));
        setData([...gitData, ...storageData]);
      });
  }, []);

  return (
    <div className="github-section">
      <div className="github-container">
        <div className="github-repos">
          <h2>Recent GitHub Activity</h2>
          <ul className="github-repos-list">
            {gitData.map((repo, index) => (
              <li className="repo__item" key={index}>
                <h2>{repo.name.replace(/_|-/gi, " ")}</h2>
                <p>{repo.description}</p>
                <a
                  href={"https://github.com/GabrielvonPlaten/" + repo.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img className="item__link" src={github} alt="Github Link" />
                </a>
                <span className="language-name">{repo.language}</span>
              </li>
            ))}
          </ul>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default GitHub;
