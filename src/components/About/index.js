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
        Full stack web developer with basic computer science background so better on the backend. Recently earned a certificate in full stack development from the University of UConn Coding Bootcamp, 
        with newly developed skills in JavaScript, React.js, Mongodb and many more. With each project, my aim is to personally improve in areas I lack, such as on the front end with design and better my knowledge 
        in coding and databases to make a great user experience. I worked on a single-page MERN app that lets users create a profile with JWT authentication using the latest technologies like GraphQL. In addition to being 
        very flexible and reliable in a group environment. I’m excited to bring my skills as part of a fast-paced, quality-driven team to make better experiences on the internet. With my versatility and drive to grow this 
        makes me an excellent candidate for any team. 
    </section>
  );
}

export default About;