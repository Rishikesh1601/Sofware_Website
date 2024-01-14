
import './App.css';
import Navbar from './components/Navbar';
import MainTitle from './components/MainTitle';
import EndToEndComponent from './components/Endtoendproducts.component';
import AboutusComponent from './components/aboutus.component';
import CounterComponent from './components/Counter.component';
function App() {
  return (
    <>
    <div className=''>
      <Navbar />
      <MainTitle />
      <AboutusComponent />
      <EndToEndComponent />
      <br></br>
      <br></br>
      <CounterComponent />
    </div>
    </>
  );
}

export default App;
