import React from 'react'
import './Contact.sass';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mail from '../../assets/Skills/mail.svg';
import Location from '../../assets/Skills/location.svg';
import HTML from '../../assets/Skills/links.svg';
import PaperPlane from '../../assets/Skills/paper-plane.svg';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="container-description">
          <p>Hit me up if you want to talk about your next idea, question, or if you want to chat!</p>
          <p>Also fell free to add me on LinkedIn or Github. </p>
        </div>
        <div className="contact-links">
          <h3>
            <img src={Mail} alt="Mail" />
            <a href="mailto:gabrielvonplaten@gmail.com">Gabrielvonplaten@gmail.com</a>
          </h3>
          <h3>
            <FontAwesomeIcon icon={faGlobe} className="linkIcon"/>
            <div className="text-position-middle-fix">
              <a href="https://github.com/GabrielvonPlaten">GitHub</a>
              <span className="hyphen-separation"> - </span>
              <a href="https://www.linkedin.com/in/gabriel-von-platen-9a89ab12a/">LinkedIn</a>
            </div>
          </h3>
          <h3>
            <img src={Location} alt="Location" />
            <p>Stockholm, Sweden</p>
          </h3>
          <h3>
            <img src={PaperPlane} alt="Resume" />
            <a href="https://www.docdroid.net/eZQ3wT3/gabrielvonplaten.pdf">Resume</a>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
