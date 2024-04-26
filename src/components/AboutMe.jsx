import picture from '../assets/images/aboutpic11.png' 
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={picture} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            Hey there! 👋 <b>I'm Muhammad Akash</b>, a dedicated React JS, frontend, and web developer based in Lahore. Armed with a degree from GC University, my journey into the world of software development has been focused on crafting seamless and engaging user experiences.
            </p>
            <p className="hero--section-description">
            I graduated from GC University, where I cultivated a strong foundation in Computer Science. My academic journey ignited my passion for turning innovative ideas into reality through code.
            </p>
            <p className="hero--section-description" >
            Currently, I'm immersed in the world of coding and problem-solving. I have one year experience in React JS Frontend Develoep, MERN Stack and I'm always eager to take on new challenges.
            </p>
          </div>
        </div>
      </section>
    );
  }