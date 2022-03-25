import React from 'react';
import coverImage from "../../images/Resume.png";
import coverImage2 from "../../images/Resume2.png";


function Resume() {
  return (
    <section className="my-5 flex-resume">
      <div>
        Download my <a href="https://docs.google.com/document/d/1Xiyl3SQIAHK_bwqkAsyEbhQ3WXMkUY9zxTO6039b1e4/edit?usp=sharing"
        target="_blank" style={{ textDecoration: "underline" }}> Resume</a>
      </div>
      <br/>
      <img src={coverImage} style={{ width: "65%" }} alt="resume" />
      <br/>
      <img src={coverImage2} style={{ width: "65%" }} alt="resume page 2" />
    </section>
  );
}

export default Resume;