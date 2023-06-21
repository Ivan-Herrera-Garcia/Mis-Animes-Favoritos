import React from 'react'
import {Container, Button} from "semantic-ui-react"
import {socialData} from "./../../utils"
import { map } from 'lodash';
import "./Headboard.scss";
import logo from "./../../logo.svg";
import {image} from "./../../assets";
import { Link } from 'react-router-dom';

export function Headboard() {
  return (
    <div className='top-bar'>
        <div className='top-bar'>
            <Container>
            <div className='top-bar'>

           <img src={image.Pochita} className="App-logo" alt="logo" />  
            <img src={logo} className="App-logo react" alt="logo" />  
            
            
            </div>
                <div className='Botones_icons'>
            {/*

                Botones de navegacion del proyecto anterior
                
                
                <Button as={Link} to='/busqueda' icon='large search' size='large'/>
            */}
            
            
            
            <div className='Iconos'>
            <Button className="Home" as={Link} to='/'  icon='large home' size='large'/> 

                    {map(socialData, (Datos) => (
                        <Button key={Datos.type}
                            as="a"
                            target="_blank"
                            href={Datos.link}
                            color={Datos.type}
                            icon={Datos.type} />
                    ))}
                    </div>
                </div>
            </Container>
        </div>
</div>
  )
}
