import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {

  return (
<div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration:'none',color:'white'}}to='/'>Resultados Simulacion Evacuación Antofagasta</Link>} scroll>
            <Navigation>
                <Link to="/landingpage">Inicio</Link>
                <Link to="/Flow_scape">Gif Escape</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/landingpage">Inicio</Link>
                <Link to="/Flow_scape">Gif Escape</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
