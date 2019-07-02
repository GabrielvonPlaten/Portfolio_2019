import React from 'react';
import './WorkBox.sass';

const WorkBox = ({ workData }) => {
  return (
    <div>
      <div className="workBox-link">
        <div
          style={{backgroundImage: 'url(' + workData.thumbnailURL + ')'}} 
          className="workBox">
          <div className="darkenBackground"></div>
          <div className="work-header">
            <h3 className="work__title">{workData.title}</h3>
            <ul className="technologies-list">
              {workData.technologies.map((tech, index) => (
                <li
                  className="technology__item" 
                  key={index}><span>{tech}</span></li>
              ))}
            </ul>
            <p>{workData.subtitle}</p>
            <ul className="workBox-list">
              {workData.links.map((link, index) => (
                <li className="workBox__item" key={index}>
                  <a
                    className="website__links"
                    rel="noopener noreferrer"
                    href={link.site} target="_blank">{link.type}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkBox
