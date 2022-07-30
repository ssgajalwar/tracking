import React from 'react';
import Profile from './components/Profile';
import NavMenu from './components/NavMenu';
import Card from './components/Card';

import './App.css';



const App = () => {
  return ( 
    <div className='app'>
      <div>
      <Profile/>
      <NavMenu/>
      </div>
       <div className='cards'>
       <div className='rowfirst'>
        <Card time="8Hrs" week="40Hrs" title="Work"/>
        <Card time="10Hrs" week="36Hrs" title="Play"/>
        <Card time="12Hrs" week="41Hrs" title="Study"/>
      </div>
      <div className='rowsecond'>
        <Card time="14Hrs" week="50Hrs" title="Exercise"/>
        <Card time="16Hrs" week="47Hrs" title="Social"/>
        <Card time="18Hrs" week="49Hrs" title="Self Care"/>
      </div>
       </div>
    </div>
  )
}

export default App