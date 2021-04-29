import React from 'react';
import MainDisplay from './MainDisplay.js';
import TestData from './TestData.js';

const Main = () => {

  let myUsername = 'ForestGod';


  return (
    <div id='mainContainer'>
      <h1 id='logo' className='mainLogo'>Portion</h1>
      <div id='mainDisplay'>
        <MainDisplay />
      </div>
      <div id='userInfoContainer'>
        <div id='treesPlanted'>
        </div>
        <div id='carbon'></div>
      </div>
    </div>
  )
}


export default Main;