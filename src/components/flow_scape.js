import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import gif_1 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_1_v1.gif'
import gif_2 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_1_v2.gif'
import gif_3 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_2_v1.gif'
import gif_4 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_2_v2.gif'
import gif_5 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_3n_v1.gif'
import gif_6 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_3n_v2.gif'
import gif_7 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_3a_v1.gif'
import gif_8 from 'C:\\Users\\ggalv\\Google Drive\\Respaldo\\TESIS MAGISTER\\evacuacion_antofagasta_web\\src\\components\\Images\\scape_center_scenario_3a_v2.gif'

class Flow_scape extends Component{
    render(){
        return(
            <div style={{width: '90%', margin: 'auto'}}>
                {/* SCENARIO 1*/}
                <Grid className='scenario_1'>
                    <Cell col={12}>
                        <h1>Escenario 1</h1>
                    </Cell>
                    <Cell col={6}>
                        <h3>Centro de la ciudad</h3>
                        <img className='gif1' src={gif_1} />
                    </Cell>
                    <Cell col={6}>
                        <h3>Vista ampliada</h3>
                        <img className='gif2' src={gif_2}/>
                    </Cell>
                </Grid>

                {/* SCENARIO 2*/}
                <Grid className='scenario_2'>
                    <Cell col={12}>
                        <h1>Escenario 2</h1>
                    </Cell>
                    <Cell col={6}>
                        <h3>Centro de la ciudad</h3>
                        <img className='gif3' src={gif_3} />
                    </Cell>
                    <Cell col={6}>
                        <h3>Vista ampliada</h3>
                        <img className='gif4' src={gif_4}/>
                    </Cell>
                </Grid>
                
                {/* SCENARIO 3 kids*/}
                <Grid className='scenario_3_k'>
                    <Cell col={12}>
                        <h1>Escenario 3 Prioridad Niños</h1>
                    </Cell>
                    <Cell col={6}>
                        <h3>Centro de la ciudad</h3>
                        <img className='gif5' src={gif_5} />
                    </Cell>
                    <Cell col={6}>
                        <h3>Vista ampliada</h3>
                        <img className='gif6' src={gif_6}/>
                    </Cell>
                </Grid>

                {/* SCENARIO 3 elders*/}
                <Grid className='scenario_3_e'>
                    <Cell col={12}>
                        <h1>Escenario 3 Prioridad Abuelos</h1>
                    </Cell>
                    <Cell col={6}>
                        <h3>Centro de la ciudad</h3>
                        <img className='gif7' src={gif_7} />
                    </Cell>
                    <Cell col={6}>
                        <h3>Vista ampliada</h3>
                        <img className='gif8' src={gif_8}/>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Flow_scape;
