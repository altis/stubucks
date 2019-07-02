import React, { Component } from 'react';
import StubucksHero from "./images/StubucksHero.jpg"
import { Button } from 'react-mdl';
import Tab from './assets/tab';
import './components.css';
import StuLove from './assets/stulove';


class Landing extends Component {
  render() {
    return(
    <div className="components">
        
         <StuLove  />
       
         <div className='TAB_COMPONENT'>
          <Tab ></Tab>
         </div>
    </div>
    )
  }
}

export default Landing;
