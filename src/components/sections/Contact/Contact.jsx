import React from "react";
import "./Contact.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faGlobe,
  faMapMarked,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="container-description">
          <p>
            Hit me up if you want to talk about your next idea, question, or if
            you want to chat!
          </p>
          <p>Also fell free to add me on LinkedIn or Github. </p>
        </div>
        <div className="contact-links">
          <h3>
            {/* <img src={Mail} alt="Mail" /> */}
            <FontAwesomeIcon icon={faMailBulk} className="linkIcon" />
            <a href="mailto:gabrielvonplaten@gmail.com">
              Gabrielvonplaten@gmail.com
            </a>
          </h3>
          <h3 className="text-position-middle-fix">
            <FontAwesomeIcon icon={faGlobe} className="linkIcon" />
            <a href="https://github.com/GabrielvonPlaten">GitHub</a>
            <span className="hyphen-separation"> </span>
            <a href="https://www.linkedin.com/in/gabriel-von-platen-9a89ab12a/">
              LinkedIn
            </a>
          </h3>
          <h3>
            {/* <img src={Location} alt="Location" /> */}
            <FontAwesomeIcon icon={faMapMarked} className="linkIcon" />
            <span>Stockholm, Sweden</span>
          </h3>
          <h3>
            {/* <img src={PaperPlane} alt="Resume" /> */}
            <FontAwesomeIcon icon={faPaperPlane} className="linkIcon" />
            <a href="https://www.docdroid.net/J8ezboQ/resume-gabriel-von-platen.pdf">
              Resume
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
