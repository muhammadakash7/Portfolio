import pic from '../assets/images/profile.png'
import Resume from '../assets/images/Muhammad Akash.pdf'
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Muhammad Akash</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Frontend React</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I specialize in creating dynamic and responsive user interfaces using React. With a focus on crafting engaging web experiences, I bring a creative edge to frontend development. 
              <br />  Let's build intuitive and visually appealing applications together.
            </p>
          <a href={Resume} download className='mx-auto'>
          <button className="btn btn-primary" >Download Resume</button>
          </a>
          </div>
        </div>
        <div className="hero--section--img">
          <img src={pic} alt="Hero Section" />
          {/* <img src="./img/hero_img.png" alt="Hero Section" /> */}
        </div>
      </section>
    );
  }