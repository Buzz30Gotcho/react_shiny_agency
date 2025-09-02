import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header';

// on ajoute nos composants de formulaire
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home/>}/>
        
        <Route path = '/resultats' element={<Results/>}></Route>
        <Route path = '/freelances' element={<Freelances/>}></Route>

        <Route path='/survey/:question_number' element={<Survey/>}/>
        <Route path='*' element={<Error/>}></Route>


      </Routes>
    </Router>
  </React.StrictMode>
);

//   http://localhost:3000 = / 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
