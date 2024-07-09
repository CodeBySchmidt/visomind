import React, { useEffect, useRef } from "react";

import "./ScrollAnimation.css"; // Ihre CSS-Datei für Animationen

import myTestImage from "./test.jpg";

const ScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains("slide-in")) {
              entry.target.classList.add("slide-in");
              entry.target.classList.remove("slide-out");
            }
          } else {
            if (!entry.target.classList.contains("slide-out")) {
              entry.target.classList.add("slide-out");
              entry.target.classList.remove("slide-in");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <div className="scrollAnimation">

        <main>
          <div
              ref={(el) => (elementsRef.current[0] = el)}
              className="fade-element slide-out eins"
          >
            Screen 1
            <div className="image-container">
              <img src={myTestImage} alt="test"/>
            </div>

          </div>

          <div
              ref={(el) => (elementsRef.current[1] = el)}
              className="fade-element slide-out zwei">
            Screen 2
            <div className="image-container">
              <img src={myTestImage} alt="test"/>
              <img src={myTestImage} alt="test"/>
            </div>

          </div>

          <div
              ref={(el) => (elementsRef.current[2] = el)}
              className="fade-element slide-out drei"
          >
            Screen 3
            <div className="image-container">
              <img src={myTestImage} alt="test"/>
              <img src={myTestImage} alt="test"/>

            </div>
          </div>
          <div
              ref={(el) => (elementsRef.current[3] = el)}
              className="fade-element slide-out vier"
          >
            Screen 4
          </div>
          <div
              ref={(el) => (elementsRef.current[4] = el)}
              className="fade-element slide-out funf"
          >
            Screen 5
          </div>
          <div
              ref={(el) => (elementsRef.current[5] = el)}
              className="fade-element slide-out sechs"
          >
            Screen 6
          </div>
        </main>
      </div>
  );
};

export default ScrollAnimation;
