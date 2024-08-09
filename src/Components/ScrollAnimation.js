// noinspection JSValidateTypes

import React, {useEffect, useRef} from "react";

import "./ScrollAnimation.css"; // Ihre CSS-Datei für Animationen


import Chapter1 from "../Chapters/Chapter1";
import Chapter2 from "../Chapters/Chapter2";
import Chapter3 from "../Chapters/Chapter3";
import Chapter4 from "../Chapters/Chapter4";
import Chapter5 from "../Chapters/Chapter5";
import Chapter6 from "../Chapters/Chapter6";
// import Chapter7 from "../Chapters/Chapter7";
// import Chapter8 from "../Chapters/Chapter8";

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
            {threshold: 0.1}
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
                    className="fade-element slide-out">
                    <Chapter1/>
                </div>

                <div
                    ref={(el) => (elementsRef.current[1] = el)}
                    className="fade-element slide-out">
                    <Chapter2/>
                </div>

                <div
                    ref={(el) => (elementsRef.current[2] = el)}
                    className="fade-element slide-out">
                    <Chapter3/>
                </div>

                <div
                    ref={(el) => (elementsRef.current[3] = el)}
                    className="fade-element slide-out">
                    <Chapter4/>
                </div>

                <div
                    ref={(el) => (elementsRef.current[4] = el)}
                    className="fade-element slide-out">
                    <Chapter5/>
                </div>

                <div
                    ref={(el) => (elementsRef.current[5] = el)}
                    className="fade-element slide-out">
                    <Chapter6/>
                </div>
            </main>
        </div>
    );
};

export default ScrollAnimation;
