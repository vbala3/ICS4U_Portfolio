import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */

  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    // Call the function to set the state string in our component
  };
  return (
    <>
      <h1 className="title">
        <center>
          <strong>ICS4U Portfolio</strong>
        </center>
      </h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/622247604509de4a60a5e388_freelancer-portfolio.jpg?v=16744389578046"
          className="illustration"
          alt="Portfolio visual"
        />
      </animated.div>
      <div className="introduction">
        <h2>About Me</h2>
        <p>
          Hello! My name is Vaseeka and I am a grade 11 student currently taking
          grade 12 Computer Science in A.Y. Jackson. This website is where I
          document my journey throughout this course and my experience working
          with various platforms and projects. To check out my work, see the{" "}
          <Link href="/about">Modules</Link> page where I go through my top 10
          modules.
        </p>
      </div>
    </>
  );
}
