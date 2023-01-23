import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */
import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";
/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function Modules() {
  const [style, trigger] = useWiggle({ x: 0, rotation: 5, scale: 0.9 });
  return (
    <div className="page">
      <animated.h1 className="title" style={style}>
        <center>
          <strong>Top 10 Modules</strong>
        </center>
      </animated.h1>
      <h2>1. Learn Git and GitHub</h2>
      <p onMouseEnter={trigger}>
        In this course I learned how to use GitHub, an online collaborative
        platform where I can work on coding projects with other people. This is
        an excellent tool that I can utilize in the future for group projects in
        school and university. Using this platform I can continue to learn to
        cooperate with others by working on one program together while also
        learning to work independently thanks to the ability to create branches
        separate from the main code and everyone else’s work on GitHub. I feel
        like I was most impacted by learning the utility of GitHub and the
        importance of sharing my work with others in an organized fashion.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/GitHub-Mark.png?v=1674444963694"
            className="illustration"
            alt="GitHub icon"
            width={380}
            height={350}
          />
        </animated.div>
      </center>
      <form action="https://www.codecademy.com/learn/learn-git" target="_blank">
        <button type="submit">Codecademy</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/document/d/10S72Cjqebi-N2oCZcNqDBXgxTHPKBjOL9BOOJoaGjR8/edit"
        target="_blank"
      >
        <button type="submit">Reflection</button>
      </form>
      <br></br>
      <h2>2. Create a Front-End React App</h2>
      <p>
        By working through this course I learned and touched up on some of the
        fundamentals when it comes to coding like conditionals, loops and
        functions and how to use them effectively. I also learned how to make my
        code more efficient using more advanced syntax such as objects and
        classes. It taught me the importance and utility of these assets. Armed
        with this knowledge, I will continue to learn more coding techniques and
        how to render my code more efficient by using new and old techniques.
        Learning new ways to tackle familiar situations is a philosophy that
        heavily impacted my view and approach on how to handle and assess
        problems.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/codecademy-banner.png?v=1674447236344"
            className="illustration"
            alt="Codecademy logo"
          />
        </animated.div>
      </center>
      <form
        action="https://www.codecademy.com/learn/paths/build-web-apps-with-react"
        target="_blank"
      >
        <button type="submit">Codecademy</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/document/d/1f1N-shzHROTqtu4mAmRlzzVPtLV2HD10p6ny_4UNhZc/edit"
        target="_blank"
      >
        <button type="submit">Reflection</button>
      </form>
      <br></br>
      <h2>3. Create a Back-End App with Javascript</h2>
      <p>
        As I worked through this course I was able to better understand the
        connection between the front-end and back-end of websites and programs.
        I learned a bit about how to create my own back-end using languages such
        as SQL to store user data and receive input. Seeing the behind the
        scenes parts in the creation of websites was very enlightening and
        allowed me to have a better grasp on the process of creating interactive
        websites as well as how different components and technologies are used
        to create something spectacular together. In the future, I will be able
        to use this knowledge to help me design and create useful and complex
        websites that utilize the most of various technologies and programming
        languages.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/securing-backend-appservice-webapps-1.png?v=1674447232714"
            className="illustration"
            alt="Back-end visual"
          />
        </animated.div>
      </center>
      <form
        action="https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript"
        target="_blank"
      >
        <button type="submit">Codecademy</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/document/d/1TpR6S0ky5f13HQ0ujKhztFdl7OTTHrNN5LMPdyU4fyY/edit"
        target="_blank"
      >
        <button type="submit">Reflection</button>
      </form>
      <br></br>
      <h2>4. Computer Science: Algorithms</h2>
      <p>
        Working through this course taught me many algorithmic skills and gave
        me a more in depth understanding of asymptotic notation. I learned how
        to use different tactics to solve problems more efficiently and how
        sometimes one manner of coding can be just as efficient as another way
        depending on the specific scenario. An example of this is when searching
        through an array where binary search is considered more efficient for
        sorted lists and linear search is better for unsorted lists. When I am
        faced with a problem in the future I will retain the fact that a
        situation can be handled in a variety of different ways but one method
        is often more useful than the others for each case. Knowing this I will
        learn to reflect on situations more and learn to analyze and assess
        issues logically and with my prior knowledge. Some of the things that
        profoundly touched me in this course is the importance of algorithms and
        how prominent they are in our day to day life. Whether it be your
        morning routine or the action that is walking, algorithms are everywhere
        in our world and can be executed in so many different ways reminiscent
        of the variety of algorithms and methods we use when coding. This along
        with Big O, Big-Theta, and Big-Omega have helped me get a better grasp
        on how coding concepts relate to the real world.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/what-is-an-algorithm-featured.png?v=1674447868437"
            className="illustration"
            alt="Algorithm visual diagram"
          />
        </animated.div>
      </center>
      <form
        action="https://www.khanacademy.org/computing/computer-science/algorithms#binary-search"
        target="_blank"
      >
        <button type="submit">Khan Academy</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/document/d/1-GbrnC3YpSBUgWPbBDJGZGWwDG6LaWOsxr7ar8LwFpE/edit"
        target="_blank"
        data-inline="true"
      >
        <button type="submit">Reflection</button>
      </form>
      <br></br>
      <h2>5. Algorithms Exploration - Cubing Workflow</h2>
      <p>
        In this assignment I was able to further my cubing skills specifically
        catered toward solving the pyraminx. As someone who originally could not
        solve and had not solved a single cube in their life aside from the
        corner twisting pyraminx only a week prior, it was both incredibly
        satisfying solving it for the first time and seeing my progress
        throughout the weeks of practicing. I learned many skills as well, such
        as how to watch and learn from tutorials, how to plan and keep a good
        work ethic when it came to practicing and timing my solves almost daily.
        I became more resilient as my determination to solve the pyraminx grew.
        Seeing how my opinion went from ‘I can’t” to “I can try” and finally to
        “I can” is something I find very inspiring and will likely be something
        I remember in the future when I feel like giving up. The overall journey
        to me easily left the greatest impression on myself and there is no
        doubt that this experience will help me be more open minded in my
        learning in the future.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/maxresdefault.jpg?v=1674447915129"
            className="illustration"
            alt="Picture of a pyraminx on a table"
          />
        </animated.div>
      </center>
      <form
        action="https://github.com/vbala3/Algorithms_Exploration---Cubing_Workflow"
        target="_blank"
      >
        <button type="submit">Workflow</button>
      </form>
      <br></br>
      <h2>6. Course on Algorithms</h2>
      <p>
        This project involved many steps that taught me a few things. To begin,
        the project allowed me the chance to work in a group to teach others
        about a concept, which in this scenario was algorithms and their
        prominence in cubing and in our world. As someone who wishes to teach as
        their career I found the opportunity quite helpful and I can see this as
        a useful experience I will look back on in my future teaching career.
        Seeing how others respond to my teaching and how others approach
        situations differently, such as the method of solving they use, and how
        different solutions can be used in harmony to fix the same problem, as
        done in our one trun pass it on activity. It was incredibly insightful
        and helped me understand everyone involved in the project, both my group
        members and those that attended, a bit better. It was also quite
        satisfying to see the results of our work firsthand when someone would
        successfully solve one of the cubes. Some of the more profound impacts
        left on me includes how, while I may have been the instructor, I learned
        just as much from them as they did from me. Specifically other ways to
        solve a cube and how there are multiple methods to resolving a puzzle.
        Even when one way may be less ideal than another, that does not mean it
        should be discounted for. This abstract idea along with further
        optimizing my cubing skills through learning and observing others is
        just one way I will continue to grow from this experience for the
        better. Finally, I found new meaning in the concept of algorithms and
        their connection to subprograms and how both relate to cubing, coding,
        trigonometry and even real life situations.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/Course%20prerequisites%20banner%20ver%202.1.svg?v=1674448057258"
            className="illustration"
            alt="Course visual"
          />
        </animated.div>
      </center>
      <form
        action="https://docs.google.com/presentation/d/1SRAb2ubrZ03kyGRnBF-BHZbyvLbhpppgGhoosAfwnmo/edit#slide=id.p"
        target="_blank"
      >
        <button type="submit">Slideshow</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeTEa_ondy7K33gi_YnCIOHbcmT3MXz5buleLNn_OeBVV9c3Q/viewform"
        target="_blank"
      >
        <button type="submit">Feedback Form</button>
      </form>
      <br></br>
      <form
        action="https://docs.google.com/document/d/1ilBOSYWFTdd5cbGUUNLD-EZ29r3PrDZPyrL1ywbT57Q/edit"
        target="_blank"
      >
        <button type="submit">Reflection</button>
      </form>
      <br></br>
      <h2>7. Hackathon: Creative Coding to Make the World a Better Place</h2>
      <p>
        In this project, I had the opportunity to create something that could
        help solve one of the UN Sustainable Development Goals through coding.
        Our group chose quality education as our main point of focus and decided
        on various approaches to solving the issue. Our plan mainly involved
        teaching young kids about various subjects in school (notably math and
        english) by creating fun, interactive games about the subject in a
        manner similar to most educational games. We also decided to inform
        people about quality education and the lack thereof in some places by
        hosting a website that also acted as a hub for all of our games in a
        similar manner to GitHub. As this was a cooperative project involving a
        good amount of people, one of the biggest challenges and skills I honed
        was communication and teamwork. I also had the chance to collaborate on
        GitHub and use features such as the projects and issues tab to keep
        track of the progress each group member was making. I was even able to
        delve into web development and learned how to create a website on
        Glitch. Most of these skills will prove useful in the future and are
        things I can continue to improve, whether that be learning a new form of
        coding when I worked on Glitch or learning to work as a group with
        others and splitting work amongst us. Furthermore, the experience of
        planning, working and creating a project to tackle a problem on the
        larger scale was something very impactful to me. It showed me just how
        much potential for change coding can ensue and the workflow and process
        that a project on a larger scale often requires to be successful.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/58_article_01.webp?v=1674448218991"
            className="illustration"
            alt="Quality education symbolism"
          />
        </animated.div>
      </center>
      <form
        action="https://github.com/s338641178/Team-Hackathon"
        target="_blank"
      >
        <button type="submit">GitHub Repository</button>
      </form>
      <br></br>
      <form action="https://team-hacakthon-react.glitch.me/" target="_blank">
        <button type="submit">Website</button>
      </form>
      <br></br>
      <form
        action="https://editor.p5js.org/vbala3/sketches/1uF6QKEBf"
        target="_blank"
      >
        <button type="submit">Game</button>
      </form>
      <br></br>
      <h2>8. Advanced JS: Natural Simulations</h2>
      <p>
        This course walked me through many different concepts and how they are
        used in coding. The first was how to manipulate the movement of a walker
        using the random, gaussian, lévy, noise and vector walk methods.This
        further solidified the idea of how many different ways you can tackle a
        challenge but also taught me how the subtle differences between each can
        be used in conjunction to create something new and different that would
        otherwise be impossible to create alone. The{" "}
        <a
          href="https://www.khanacademy.org/computer-programming/spin-off-of-project-mountain-range/5320045558808576"
          target="_blank"
        >
          Mountain Range Project
        </a>{" "}
        in particular taught me how useful randomness is to make each person’s
        experience slightly differ as well as the utility of each of the random
        methods. When it comes to what left the greatest mark on me after the
        course, I would say it was seeing how heavily computer science is
        intertwined with other subjects such as math and physics and how all of
        them can be applied in the real world. The{" "}
        <a
          href="https://www.khanacademy.org/computer-programming/spin-off-of-project-computational-creatures/5005011062407168"
          target="_blank"
        >
          Computational Creature Project
        </a>
        , for example, had me replicate real animal behavior using code. Some of
        the challenges spoke of acceleration, velocity, period and amplitude
        which relate to both physics and math respectively. Seeing how these
        supposedly different concepts work together really gave me a different
        perspective on the aforementioned subjects.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/maxresdefault%20(1).jpg?v=1674448312104"
            className="illustration"
            alt="Khan academy natrual simulations challenge screenshot"
          />
        </animated.div>
      </center>
      <form
        action="https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations#intro-natural-simulations"
        target="_blank"
      >
        <button type="submit">Khan Academy</button>
      </form>
      <br></br>
      <h2>9. Live Coding Challenge</h2>
      <p>
        Arguably the biggest and longest project I worked on in this course. For
        something so grand it is really no surprise it taught me so much.
        Combining elements from many of the previous projects I have already
        spoken about, this challenge allowed me to work in pairs, teach others
        about coding and to see how computer science, programming and technology
        have evolved in our world and what it means for our future. Our project
        primarily focused on animation so I was given the chance to learn to
        import and manipulate sprite sheets and images and create sprite data
        using JSX. Unlike the hackathon project I was also working a bit more
        collaboratively on the code instead of splitting the work between my
        group members meaning I not only improved my collaboration skills but
        was also able to learn from my partner. Refactoring was also an
        interesting skill that was utilized here. Not only did I learn to
        understand the base code better in order to edit and add to the correct
        places but I also had to brainstorm new ideas that we could implement to
        render the program more complex. The idea of refactoring is something I
        can see myself learning and improving on in the future mainly by taking
        either old projects or the main concept of someone else’s work and
        building on it from there. This project was also impactful by teaching
        me more about animation and how this emerging technology will continue
        to grow and evolve along with its industry. It was also meaningful to me
        to teach someone else how to code and see how they succeed or go above
        what we give.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/davis-169hero2-teachcode-twenty20.webp?v=1674448838656"
            className="illustration"
            alt="Group of children coding in a classroom environment"
          />
        </animated.div>
      </center>
      <form
        action="https://github.com/s338641178/Animated_Sprites"
        target="_blank"
      >
        <button type="submit">GitHub Repository</button>
      </form>
      <br></br>
      <form
        action="https://replit.com/@VASEEKABALACHAN/LiveCodingChallenge#sketch.js"
        target="_blank"
      >
        <button type="submit">Refactored Code</button>
      </form>
      <br></br>
      <h2>10. Following Others’ Live Coding Tutorial</h2>
      <p>
        Along with refactoring a program of my choice I was also allowed the
        chance to see the results of my peers and how they refactored their own
        programs of choice. While programming through these step by step
        tutorials I learned other niche techniques in coding like the translate
        function in{" "}
        <a
          href="https://editor.p5js.org/vbala3/sketches/X6D-1PRBE"
          target="_blank"
        >
          Plinko
        </a>
        , updating and altering colour based on position in{" "}
        <a
          href="https://editor.p5js.org/vbala3/sketches/Q9xbi4Iw7"
          target="_blank"
        >
          Space Invaders
        </a>
        , vectors and direction in{" "}
        <a
          href="https://editor.p5js.org/vbala3/sketches/uegwcvrU4"
          target="_blank"
        >
          Rendering Ray Casting
        </a>
        , how to apply new functions like splice and update to a particles class
        in{" "}
        <a
          href="https://editor.p5js.org/vbala3/sketches/RZKiCJNW-"
          target="_blank"
        >
          3D Fire Effect
        </a>{" "}
        and so much more. Each experience was unique and the satisfaction I got
        when I managed to fully complete one was truly exhilarating and
        something I will definitely look back on fondly. While the coding itself
        was informative I also learned a bit about how to present and explain
        ideas better by taking note of tactics used in other people’s
        presentations like how they organize their presentation and utilize the
        slides. These tips were useful prior to my own presentation and will
        also help guide me when I create other presentations in the future.
        Overall, this project was inspiring and ignited my wish to learn more
        about coding and try my hand at refactoring other programs.
      </p>
      <center>
        <animated.div onMouseEnter={trigger} style={style}>
          <img
            src="https://cdn.glitch.global/d8b69a04-3040-4427-8ae4-ae92ae049aeb/1_oVAZKOlDAvx4iCKtk0XCmQ.jpeg?v=1674448841502"
            className="illustration"
            alt="Symbolic representation of learning to code from others"
          />
        </animated.div>
      </center>
    </div>
  );
}
