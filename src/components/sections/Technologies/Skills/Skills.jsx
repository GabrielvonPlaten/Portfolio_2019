import React from "react";
import "./Skills.sass";

// Tech I Use
import Html from "../../../../assets/Skills/html.svg";
import Css from "../../../../assets/Skills/css.svg";
import Scss from "../../../../assets/Skills/Scss.svg";
import JS from "../../../../assets/Skills/javascript.svg";
import Vue from "../../../../assets/Skills/vuejs.svg";
import ReactJS from "../../../../assets/Skills/react.svg";
import Git from "../../../../assets/Skills/git.svg";
import GitHub from "../../../../assets/Skills/github.svg";
import MongoDB from "../../../../assets/Skills/mongodb-logo-svg-vector.svg";
import Webpack from "../../../../assets/Skills/webpack.svg";

// toolsIWantToLearn Images
import Node from "../../../../assets/Skills/nodejs.svg";
import Figma from "../../../../assets/Skills/figma.svg";
import Gulp from "../../../../assets/Skills/gulp.svg";
import Laravel from "../../../../assets/Skills/laravel.svg";
import MySQL from "../../../../assets/Skills/mysql.svg";
import GraphQL from "../../../../assets/Skills/graphql.svg";
import Angular from "../../../../assets/Skills/angular.svg";

// Want to learn images
import Cs from "../../../../assets/Skills/csharp.svg";
import Typescript from "../../../../assets/Skills/typescript.svg";

const Skills = () => {
  const toolsIUse = [
    { skill: Html, alt: "Html" },
    { skill: Css, alt: "CSS" },
    { skill: Scss, alt: "SCSS" },
    { skill: JS, alt: "JavaScript" },
    { skill: Vue, alt: "Vue" },
    { skill: ReactJS, alt: "React" },
    { skill: Git, alt: "Git" },
    { skill: GitHub, alt: "GitHub" },
    { skill: Node, alt: "Node" },
    { skill: MongoDB, alt: "MongoDB" },
    { skill: Figma, alt: "Figma" },
    { skill: Gulp, alt: "Gulp" },
    { skill: Webpack, alt: "Webpack" }
  ];

  const toolsIWantToLearn = [
    { skill: Laravel, alt: "Laravel" },
    { skill: MySQL, alt: "SQL" },
    { skill: Cs, alt: "C#" },
    { skill: Typescript, alt: "Typescript" },
    { skill: GraphQL, alt: "GraphQL" },
    { skill: Angular, alt: "Angular" }
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-section-title">Technologies</h2>
      <div className="skills-grid">
        <div className="skills-container">
          <h3 className="container-header">What I Use</h3>
          <ul className="technology-list">
            {toolsIUse.map((i, index) => (
              <li className="technology__item" key={index}>
                <img className="technology__img" src={i.skill} alt={i.alt} />
                <p className="technology__text">{i.alt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-container">
          <h3 className="container-header">I Want to Learn</h3>
          <ul className="technology-list">
            {toolsIWantToLearn.map((i, index) => (
              <li className="technology__item" key={index}>
                <img className="technology__img" src={i.skill} alt={i.alt} />
                <p className="technology__text">{i.alt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
