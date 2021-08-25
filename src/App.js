import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

// let name="Akshay"
function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container my-2">
        {/* <TextForm heading= "Enter Text here"/> */}
        <About/>

      </div>

    </>
  );
}

export default App;
