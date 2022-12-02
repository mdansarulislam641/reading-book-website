
import './App.css';
import Benner from './components/Benner/Benner';
import Critaria from './components/Critaria/Critaria';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div className="App-container">
     <Navbar></Navbar>
     <Benner></Benner>
     <Critaria></Critaria>
    </div>
  );
}

export default App;
