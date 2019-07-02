import React from 'react';
import { Switch, Route } from 'react-router-dom';



import LandingPage from './landingpage';


import Cofee from './cofee';
import Tea  from './tea'
import Menu from './menu';
import Rewards from './rewards';
import JoinTeam from './jointeam';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/cofee" component={Cofee} />
    <Route path="/tea" component={Tea} />
    <Route path="/menu" component={Menu} />
    <Route path="/rewards" component={Rewards} />
    <Route path="/jointeam" component={JoinTeam} />
  </Switch>
)

export default Main;
