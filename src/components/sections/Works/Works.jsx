import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Works.sass';

// Components
import WorkBox from '../../WorksBox/WorkBox';

const Works = () => {
  const [workData, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/work')
      .then(res => setData(res.data))
  }, [])

  return (
    <div className="works-section">
      <div className="works-container">
        <h2 className="works-container__title">My Projects</h2>
        {workData.map((project, index) => (
          <WorkBox
            key={index} 
            workData={project} />
        ))}
      </div>
    </div>
  )
}

export default Works
