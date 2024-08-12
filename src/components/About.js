import React from "react";
import "./About.css";

function About() {
  const description = `A Passionate front-end coder yet student with a knack for designing. I'm driven by computers and creativity. I thrive in agile teams, pushing code that solves real-world problems. My toolkit includes HTML, CSS, JavaScript, ReactJs, and MongoDB, with a flair for UI/UX design using Figma and Framer. 
      I have lately interned at Prism I.T. Systems, Surat as a ReactJS Developer. I have diligently worked on some standout projects: EduEnroll (a smooth enrollment system), and News Monkey (a real-time news app).
      I'm an amicable person who wears his confidence on his sleeves. I work great within a team and am able to handle peculiar situations. Given a leadership situation I come out as an optimistic and passionate person.`;
  return (
    <div id="about" className="about-container">
      <div className="brackets">
        {"{"} {"/"} {"}"}
      </div>
      <h2 className="headings">&lt;about_me&gt;</h2>
      <p className="about">
        {description.split(" ").map((word, index) => (
          <span key={index} className="word">
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

export default About;
