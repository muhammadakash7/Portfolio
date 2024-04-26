import frontend from '../assets/images/Frontend.png'
import responsive from '../assets/images/responsive.png'
import web from '../assets/images/web.png'
import react from '../assets/images/React.png'
import mern from '../assets/images/developer.png'
import problem from '../assets/images/problem.png'
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={frontend} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Frontend Development</h3>
              <p className="skills--section--description">Bringing designs to life with a focus on seamless user experiences. I excel in developing responsive and visually appealing frontend interfaces, ensuring optimal performance across various devices and browsers.</p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={web} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Web Development </h3>
              <p className="skills--section--description"> I specialize in web development services, seamlessly blending frontend and backend technologies. From interactive user interfaces to robust server-side solutions, I turn concepts into captivating online experiences.</p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={responsive} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Responsive Design </h3>
              <p className="skills--section--description">Adapting websites to various screen sizes and devices is crucial in today's digital landscape. I specialize in building responsive layouts that provide an optimal viewing experience, enhancing usability and accessibility.</p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={problem} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">problem Solving </h3>
              <p className="skills--section--description">As a problem-solving enthusiast, I thrive on finding innovative solutions to complex issues. Whether it's optimizing code efficiency or overcoming development hurdles, count on me to turn obstacles into opportunities.</p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={react} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">React JS Development </h3>
              <p className="skills--section--description">Transforming ideas into interactive and dynamic web applications using the power of React JS. From single-page applications to complex front-end solutions, I specialize in crafting robust and scalable React-based solutions.</p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img className="img" src={mern} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">MERN Stack Developer </h3>
              <p className="skills--section--description">Expert in MERN (MongoDB, Express.js, React.js, Node.js) stack development. Crafting dynamic, scalable web applications that seamlessly integrate data management, server-side logic, and engaging user interfaces.</p>
            </div>
          </div>
      </div>
    </section>
  );
}