//import logo from './logo.svg';
import './App.css';
import './detetive/Evidencia.css';
import Evidencia from './detetive/Evidencia';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Evidencia/>
      </header>
    </div>
  );
}

export default App;
