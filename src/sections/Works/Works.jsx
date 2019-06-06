import React from 'react'
import './Works.sass';

// Components
import WorkBox from '../../components/WorksBox/WorkBox';

const Works = () => {
  return (
    <div className="works-section">
      <div className="works-container">
        <h2 className="works-title">My Projects</h2>
        <WorkBox />
        <WorkBox />
      </div>
    </div>
  )
}

export default Works
