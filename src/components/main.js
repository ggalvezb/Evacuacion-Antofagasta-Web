import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Flow_scape from './flow_scape';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/Evacuacion-Antofagasta-Web/" component={Landingpage}/>
        <Route path="/landingpage" component={Landingpage}/>
        <Route path="/Flow_scape" component={Flow_scape}/>
    </Switch>
)

export default Main;