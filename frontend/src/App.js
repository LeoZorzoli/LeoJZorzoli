import React from 'react'

import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/pages/Main'
import Social from './components/social/Social'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Social />
    </div>
  )
}

export default App;
