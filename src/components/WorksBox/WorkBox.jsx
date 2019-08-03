import React, { useEffect } from 'react';
import './WorkBox.sass';

const WorkBox = ({ workData }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.workBox-animation');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log(entry.intersectionRatio);
          if (entry.intersectionRatio) {
            entry.target.style.animation = `workBox_animate 0.6s forwards ease-in`;
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });
  });

  return (
    <div>
      <div className='workBox-link workBox-animation'>
        <div
          style={{ backgroundImage: `url(${workData.thumbnailURL})` }}
          className='workBox'
        >
          <div className='darkenBackground' />
          <div className='work-header'>
            <h3 className='work__title'>{workData.title}</h3>
            <ul className='technologies-list'>
              {workData.technologies.map((tech, index) => (
                <li className='technology__item' key={index}>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <p>{workData.subtitle}</p>
            <ul className='workBox-list'>
              {workData.links.map((link, index) => (
                <li className='workBox__item' key={index}>
                  <button className='btn btn--blue'>
                    <a
                      className='website__links'
                      rel='noopener noreferrer'
                      href={link.site}
                      target='_blank'
                    >
                      {link.type}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBox;
