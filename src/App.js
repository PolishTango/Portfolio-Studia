import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Portfollio from './Components/Portfollio';
import Stopka from './Components/Stopka';
import Statystyki from './Components/Statystyki';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Portfollio/>
      <Statystyki/>
      <Stopka/>
    </div>
  );
}

export default App;
