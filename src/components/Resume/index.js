import React from 'react';
import coverImage from "../../images/resume.jpg";


function Resume() {
  return (
    <section className="my-5 flex-resume">
      <img src={coverImage} style={{ width: "65%" }} alt="resume" />
    </section>
  );
}

export default Resume;