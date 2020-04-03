import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/Evacuacion-Antofagasta-Web/" component={Landingpage}/>
        <Route path="/landingpage" component={Landingpage}/>
    </Switch>
)

export default Main;