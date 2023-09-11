
import './App.css';
import Navbar from './compents/Navbar';
import TextForm from './compents/TextForm';
import propTypes from 'prop-types';
import About from "./compents/About";
import Color from "./compents/Color";
function App() {
  return (
    <>
  
      <Navbar title='Sahalfaiz'  about='khan' />
      <About/>
      <div className='container my-5'>
      <TextForm hea='Enter Your Text' />
      <Color/>
      </div>
    </>
      )
    }
  Navbar.propTypes ={
    title:propTypes.string.isRequired,
    about:propTypes.string.isRequired
  }
  Navbar.defaultProps ={
    title:'please put',
    about:'pleaseput',

  };

export default App;
