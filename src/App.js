import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './components/images/stubucks-logo.png'
import HeaderTab from './components/headertab';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <HeaderTab/>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Stubucks</Link>} scroll>
        <img className="logo" src={logo} alt="Logo" />
          <Navigation>
                <Link style={{textDecoration: 'none', fontSize:20}} to="/cofee">Cofee</Link>
                <Link style={{textDecoration: 'none', fontSize:20}} to="/tea">Tea</Link>
                <Link style={{textDecoration: 'none', fontSize:20}} to="/menu">Menu</Link>
                <Link style={{textDecoration: 'none', fontSize:20}} to="/rewards">Rewards</Link>
                <Link style={{textDecoration: 'none', fontSize:20}} to="/jointeam">Want to join our Team?</Link>
            </Navigation>
        </Header>
        
        <Content>
            
            <Main/>
        </Content>
    </Layout>

    
</div>

    );
  }
}

export default App;
