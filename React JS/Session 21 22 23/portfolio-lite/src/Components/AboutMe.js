import React from "react";
import x from "../image/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h2>About Me</h2>
     <img src={x} alt="" srcset="" />
<p>
        I am a highly organized and self-motivated individual eager to leverage
        my skills in an entry-level position within a respected organization.
        With a strong passion for learning technical aspects and a proven
        ability to thrive under work pressure, I bring a robust skill set in
        Full-stack Development. My proficiency spans web, application, Android,
        and iOS development, as well as software engineering, with expertise in
        languages and frameworks including C, Dart, HTML, CSS, React.js,
        Flutter, Firebase, MongoDB, Node.js, REST API, and JavaScript.
        Throughout my career, I have demonstrated a dedication to creating
        elegant solutions and optimizing user experiences. I excel in dynamic
        environments where I can apply my technical knowledge collaboratively
        across diverse teams. Continuously evolving alongside advancements in
        technology, I am committed to delivering scalable solutions that align
        with the evolving needs of businesses and users. My innate communication
        skills facilitate effective collaboration and problem-solving, ensuring
        high-quality outcomes in every project. I am enthusiastic about
        contributing to innovation and growth within your organization. Let's
        connect and explore how my technical expertise and passion for learning
        can drive success and propel us towards achieving our goals together.
      </p>
    </div>
  );
};

export default AboutMe;
