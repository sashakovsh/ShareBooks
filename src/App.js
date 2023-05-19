import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Profile from './routes/Profile'
import Navigation from './components/Navigation';
import Recs from './routes/Recs';
import Favourite from './routes/Favourite';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path={'/'} exact={true} element={<Home />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/recs'} element={<Recs />} />
      <Route path={'/likeit'} element={<Favourite />} />
    </Routes>
    </>
  );
}

export default App;