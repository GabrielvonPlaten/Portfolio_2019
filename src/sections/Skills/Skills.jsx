import React from 'react'
import './Skills.sass';

// Front end Images
import Html from '../../assets/Skills/html.svg';
import Css from '../../assets/Skills/css.svg';
import Scss from '../../assets/Skills/Scss.svg';
import JS from '../../assets/Skills/javascript.svg';
import Vue from '../../assets/Skills/vuejs.svg';
import ReactJS from '../../assets/Skills/react.svg';
import Git from '../../assets/Skills/git.svg';
import GitHub from '../../assets/Skills/github.svg';

// Intermediate Images
import Node from '../../assets/Skills/nodejs.svg';
import Figma from '../../assets/Skills/figma.svg';
import Gulp from '../../assets/Skills/gulp.svg';

// Beginner
import PHP from '../../assets/Skills/php.svg';
import Laravel from '../../assets/Skills/laravel.svg';
import MySQL from '../../assets/Skills/mysql.svg';
import Less from '../../assets/Skills/less.svg';
import MongoDB from '../../assets/Skills/mongodb-logo-svg-vector.svg';
import Wordpress from '../../assets/Skills/wordpress.svg';
import Webpack from '../../assets/Skills/webpack.svg';

// Want to learn images
import Cs from '../../assets/Skills/csharp.svg';
import Python from '../../assets/Skills/python.svg';


const Skills = () => {
  const confident = [
    {skill: Html, alt: 'Html'},
    {skill: Css, alt: 'CSS'},
    {skill: Scss, alt: 'SCSS'},
    {skill: JS, alt: 'JavaScript'},
    {skill: Vue, alt: 'Vue'},
    {skill: ReactJS, alt: 'React'},
    {skill: Git, alt: 'Git'},
    {skill: GitHub, alt: 'GitHub'},
  ];

  const intermediate = [
    {skill: Node, alt: 'Node'},
    {skill: MongoDB, alt: 'MongoDB'},
    {skill: Figma, alt: 'Figma'},
    {skill: Gulp, alt: 'Gulp'},

  ]

  const beginner = [
    {skill: PHP, alt: 'PHP'},
    {skill: Laravel, alt: 'Laravel'},
    {skill: MySQL, alt: 'SQL'},
    {skill: Less, alt: 'Less'},
    {skill: Wordpress, alt: 'Wordpress'},
    {skill: Webpack, alt: 'Webpack'},
  ]

  const wantToLearn = [
    {skill: Cs, alt: 'C#'},
    {skill: Python, alt: 'Python'},
  ]

  return (
    <div className="skills-section">
      <h2 className="skills-section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skills-container">
          <h3 className="container-header">Confident</h3>
          <ul className="skills-list">
            {confident.map((i, index) => (
              <li key={index}>
                <img src={i.skill} alt={i.alt}/>
                <p>{i.alt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-container">
          <h3 className="container-header">Intermediate</h3>
          <ul className="skills-list">
            {intermediate.map((i, index) => (
                <li key={index}>
                  <img src={i.skill} alt={i.alt}/>
                  <p>{i.alt}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="skills-container">
          <h3 className="container-header">Beginner</h3>
          <ul className="skills-list">
            {beginner.map((i, index) => (
                <li key={index}>
                  <img src={i.skill} alt={i.alt}/>
                  <p>{i.alt}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="skills-container">
          <h3 className="container-header">Want to Learn</h3>
          <ul className="skills-list">
            {wantToLearn.map((i, index) => (
                <li key={index}>
                  <img src={i.skill} alt={i.alt}/>
                  <p>{i.alt}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
