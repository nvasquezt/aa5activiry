import React from "react";

const About = () => {
  return (
    <div className="App">
      <div className="references">
        <h3>Video presentación</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3J2mIMh7NXQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
