
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Joblisting from './Joblisting';
import Searchjob from './Searchjob';
import Termsofservice from './Termsofservice';
import Privacypolicy from './Privacypolicy';
import Contact from './Contact';
import { Routes, Route,   } from "react-router-dom";
import Addjobform from './Addjobform';







function App() {
  return (
    <div className="App">
      <Header/>
      
      
     
      

      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/Joblistig" element={<Joblisting />} />
        <Route path='/Addjobform' element={<Addjobform/> } />
        <Route path="/Termsofservice" element={<Termsofservice />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/Contact" element={<Contact />} />
        


      
      </Routes>

      
     
    
      <Footer/>
      
  
    

    

    </div>
  );
}



export default App;
