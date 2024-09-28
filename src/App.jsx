//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar}  from './components/Navbar';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import {Loader} from './components/Loader.jsx';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer.jsx';
import { Calcular } from './components/Calcular.jsx';
 

function App() {
 const [loading,setLoading] = useState(true); //Estado para controlar el loader

 useEffect(()=>{
    //simula la carga de la aplicacion
    const timer =setTimeout(()=>{
       setLoading(false); //oculta el loader despues de 5 segundos 
    },5000);
    //Limpia el temporizador si el componente se desmonta
    return ()=> clearTimeout(timer);
 }, []);
  return (
     <>
         {loading ? (
           <Loader></Loader>
         ): (
          <Router>
             <div>
                 <Navbar />
                 <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/contact' element={<Contact />} />
                     <Route path='/services' element={<Services />}></Route>
                     <Route path='/calculadora' element={<Calcular />}></Route>
                 </Routes>
                 <Footer></Footer>
            </div>
          </Router>
         )};
     </>
  );
}

export default App
