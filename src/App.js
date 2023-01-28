import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import Points from './components/Points/index';
import IPFS from './components/IPFS';
import How from './components/how';
import Closer from './components/closer';
import Help from './components/help';
import Video from './components/video';
import News from './components/news';
import Footer from './components/footer';
import Alerts from './components/alert';
import About from './components/about';


function App() {
  return (
    <div className="App">
  
      <div>
      <Home className="Home" id="about" />
      </div>
      <div>
       <Points />
      </div>
      <div>
        <IPFS />

      </div>
      <div>
        <How />
      </div>
    
      <div>
        <Help />
      </div>
      <div>
        
        <Closer />
      </div>

      <div>
        {/* <Video /> */}
      </div>
      <div>
        {/* <News /> */}
      </div>
      <div>
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
