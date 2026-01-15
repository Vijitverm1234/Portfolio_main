import React, { useEffect, useState } from "react";
import "./Header.css";
import vijitimg from "../../assets/vijitimage.jpg";
import pattern from "../../assets/background.png";
const Header = () => {
  const roles = ["Coder", "Web Developer", "Problem Solver"];

   const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = roles[wordIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, isPaused]);
  return (
    <div className="head-sec">
      <img src={pattern} alt="decor" class="head-decor" />
      <div className="head-left">
        <div className="left-container">
          <div className="left-back"></div>
          <div className="left-img">
            <img src={vijitimg} alt="" />
          </div>
        </div>
      </div>
      <div className="head-right">
        <div className="right-heading changing-text">
            {displayText}
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam! Sapiente perspiciatis, sint doloribus cupiditate necessitatibus, consequatur aperiam natus deserunt saepe aliquid sit dolores iste possimus, reprehenderit magni dolore hic.</p>
        <div className="right-btn">
          <button className="right-resume">
            Resume
          </button>
          <div className="right-connect">
            Connect?
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default Header;
