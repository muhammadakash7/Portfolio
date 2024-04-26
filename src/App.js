import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import MySkills from './components/MySkills';
import MyPortfolio from './components/MyPortfolio';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <div>
          <Navbar/>
          <HeroSection/> 
          <AboutMe/>
          <MySkills/>
          <MyPortfolio/>
          {/* <Routes>
            <Route path='/heroSection' element={<HeroSection/>}></Route>
          </Routes> */}
          <ContactMe/>
          <Footer/> 
        </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
