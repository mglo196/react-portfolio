// AboutMe.js
import React from 'react';
import './AboutMe.css'; // Optional: You can add styles for this component

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-container">
        {/* Profile Image */}
        <div className="about-me-image">
          <img
            src="https://via.placeholder.com/150" // Replace with your own image URL
            alt="Developer"
            className="profile-image"
          />
        </div>

        {/* Bio Content */}
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hello, I’m a passionate web developer with experience in building
            dynamic, responsive, and user-friendly applications. I specialize in
            React and enjoy creating innovative solutions to real-world problems.
            My expertise includes working with JavaScript, React, and a variety of
            other web technologies. In my spare time, I love to explore new
            technologies, collaborate on open-source projects, and learn from the
            amazing developer community.
          </p>

          {/* You can include more details, such as skills, hobbies, or a call to action */}
          <p>
            I'm always looking for new opportunities to learn and grow. Feel free
            to check out my projects in the Portfolio section or get in touch with
            me through the Contact page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
