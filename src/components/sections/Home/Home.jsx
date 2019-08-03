import React, { useEffect } from 'react';
import './Home.sass';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio) {
          entry.target.style.animation = `text_animation 2s ${
            entry.target.dataset.delay
          } forwards ease-out`;
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  });

  return (
    <div className='view-home'>
      <div className='title-name'>
        <h1 className='animate' data-delay='0.1s'>
          Gabriel von Platen
        </h1>
        <h3 className='animate' data-delay='0.5s'>
          I'm a <span className='role'>{'{Web Developer}'}</span> based in
          Stockholm, Sweden
        </h3>
      </div>
      <div className='title-links'>
        <ul className='animate' data-delay='1s'>
          <li>
            <a
              className='btn btn--blue'
              href='https://github.com/GabrielvonPlaten'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className='btn btn--blue'
              href='https://www.linkedin.com/in/gabriel-von-platen-9a89ab12a/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className='btn btn--blue'
              href='https://www.docdroid.net/J8ezboQ/resume-gabriel-von-platen.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
