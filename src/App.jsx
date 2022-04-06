import Intro from './components/Desktop/Intro/Intro'; 
import Works from './components/Desktop/Works/Works';
import Contact from './components/Desktop/Contact/Contact'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"; 

const App = () => {

  return (

    <>
    <div className="container">
      <div className="blocHorizontal">
        <div className="slide "><Intro/></div> 
        <div className="slide two "><Works/></div> 
        <div className="slide "><Contact/></div>
        <ToastContainer />
      </div>
    </div>   
    </>
   
  );
}

export default App;
