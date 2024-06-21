import './assets/css/App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import NossosProdutos from './Pages/NossosProdutos';
import QuemSomos from './Pages/QuemSomos'
import Register from './Pages/Register'
import Login from './Pages/login'


function App() {

  return (

    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/NossosProdutos' element={<NossosProdutos/>}></Route>
          <Route path='/QuemSomos' element={<QuemSomos/>}></Route>
          <Route path='/registrar' element={<Register/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
        </Routes>
        <Footer />

      </>
    </Router>






  );


}

export default App
