import React, { Component } from 'react';
import StubucksHero from "../images/StubucksHero.jpg"
import { Button } from 'react-mdl';

import './assets.css';

class StuLove extends Component {
  render() {
    return(
      <div> <div>
        <img className="stuhero" src={StubucksHero} alt="Logo" />
        <div className="textoverlay"> <span className="green">Love</span> Your Stu? 
      <p/> <p className="overlaybottom">Look at our range and choose the Stu that suits you.</p>
         </div>
        <Button primary class="btn">Choose your Cofee</Button>
        </div>

     </div>

    )
  }
}

export default StuLove;
