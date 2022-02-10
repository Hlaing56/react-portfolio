import React from 'react';
import me from "../../images/headshot.png";


function About() {
  return (
    <section>
        About me 
        <br/>
        <br/>
        <img src={me} alt="cover" style={{width: "11%"}} />
        <br/>
        <br/>
        My name is Hlaing Aung and I am currently taking a online bootcamp to be a full stack web developer. I am looking to grow and better myself in this field and hoping to get into the industry via an internship, 
        so I would be grateful if you contact me if I haven't contacted you already. I am bilingual being able to speak both English and Burmese. I am proficient in JavaScript, React, MongoDB and more. 
        <br/>
        <br/>
        A fun quote I like is from the Bee Movie "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.
        The bee, of course, flies anyway because bees don't care what humans think is impossible."
    </section>
  );
}

export default About;