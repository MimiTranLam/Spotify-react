//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {Section1, Section2, Section3} from './components/section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Section1/>
        <Section2/>
        <Section3/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
