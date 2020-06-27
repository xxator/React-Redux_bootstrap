import React from 'react';
import './App.css';
import {StyledText} from './components/StyledText/StyledText';
import {Header} from './components/Header/Header';
import {Gallery} from './components/Gallery/Gallery';
import ExpertSystem from './components/Gallery/ExpertSystem';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery/>
    </div>
  );
}

export default App;
