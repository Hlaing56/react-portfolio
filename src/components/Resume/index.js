import React from 'react';
import coverImage from "../../images/resume.jpg";


function Resume() {
  return (
    <section className="my-5 flex-resume">
      <img src={coverImage} style={{ width: "65%" }} alt="resume" />
      <br/>
      <div>
        Download my <a href="https://docs.google.com/document/d/18d1908gCY_3KAt6rk5r_Eps2X-zRg1mYBsivsT3sez0/edit?usp=sharing"
        style={{ textDecoration: "underline" }}> Resume</a>
      </div>
    </section>
  );
}

export default Resume;