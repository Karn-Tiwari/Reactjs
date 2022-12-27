import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import movies  from "./components/getMovies";

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <movies/>
    </>
    
   
  );
}

export default App;
