import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Report from 'powerbi-report-component';


class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '90%', margin: 'auto'}}>
            <Grid> 
                <Cell col={12}>
                    <h1>Resultados Población sintética</h1>
                </Cell>
                <Cell col ={12}>
                <iframe width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiODI4Y2E5ZTQtNjU1ZC00YmEyLWI3NTEtYmY2ZjdhZGYyMDAzIiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9" frameborder="0" allowFullScreen="true"></iframe>
                </Cell>
            </Grid>

            <Grid>
                <Cell col={12}>
                    <h1>Resultados Simulación </h1>
                </Cell>
                <Cell col ={12}>
                <iframe width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMzhiMTZlY2YtODc5YS00MDgxLThlMjctNGNlYzIyODU1NDJmIiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9" frameborder="0" allowFullScreen="true"></iframe>  
                </Cell>              
            </Grid>
            </div>
        )
    }
}
export default Landingpage;