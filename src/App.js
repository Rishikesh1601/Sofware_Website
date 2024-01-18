
import './App.css';
import Navbar from './components/Navbar';
import MainTitle from './components/MainTitle';
import EndToEndComponent from './components/Endtoendproducts.component';
import AboutusComponent from './components/aboutus.component';
import CounterComponent from './components/Counter.component';
import CompaniesSlider from './components/Companiesslider';
import TeamAgumentation from './components/Teamagumentation';
import OurProjectComponent from './components/OurProject.component';
import Footer from './components/Footer.component';
function App() {
  return (
    <>
    <div className=''>
      <Navbar />
      <MainTitle />
      <AboutusComponent />
      <br></br>
      <br></br>
      <EndToEndComponent />
      <br></br>
      <br></br>
      <TeamAgumentation />
      <br></br>
      <br></br>
      <CounterComponent />
      <br></br>
      <br></br>
      <OurProjectComponent />
      <br></br>
      <br></br>
      <CompaniesSlider />
      <br></br>
      <Footer />
    </div>
    </>
  );
}

export default App;
