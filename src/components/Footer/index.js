import React from 'react';
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";


function Footer() {
    return (
      <footer className="flex-footer">
          <a href="https://github.com/Hlaing56">
          <img src={github} alt="github" className="mx-2"/>
          </a>
          <a href="https://www.linkedin.com/in/hlaing-aung-ba577021b/">
          <img src={linkedin} style={{ width: "11%" }} alt="linkedin" className="mx-2"/>
          </a>
      </footer>
    );
}

export default Footer;