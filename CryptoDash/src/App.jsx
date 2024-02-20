import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage.';
import Coinpage from './Pages/Coinpage';
import MeetDeveloper from './Components/MeetDeveloper';
import Front from './Components/Front';
import Footer from './Components/Footer';

function App () {
  return (<>
  
   <BrowserRouter>
   {/* <Header/> */}
   <Front/>
   <Footer/>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      {/* <Route path='/Coins/:id' element={<Coinpage/>}/> */}
      <Route path='/MeetDeveloper' element={<Homepage/>}/>
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
