import React from 'react';
import {Image, Card, Icon} from "semantic-ui-react";
import {imagenes} from "./../../utils";
import {map} from "lodash";
import "./Animes.scss";
import { Link } from 'react-router-dom';

export function Animes() {
  return (
    <div>
      <div>

        {map(imagenes, (Caratulas) => (
          <div className='Contenido'> 
        <Link  to={`${Caratulas.link}`}>
           <Card className='Carta'>
              <Image className="Img" src={Caratulas.enlace}/>
              <Card.Content>
              <Card.Header>{Caratulas.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{Caratulas.genero}</span>
              </Card.Meta>
              <Card.Description>
                {Caratulas.descripcion}
              </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <a>
              <Icon name='user' />
                {Caratulas.genero}
              </a>
              </Card.Content>
            </Card>
            </Link> 
           {/*
          <table border={1} width={900}>
            <td style={{width:`30%`}}>
              <div className='Imagenes'>
                <Image className='Img' src={Caratulas.enlace}/>
              </div>
            </td>
            <td> 
              <div className='Texto'>
                <h1>{Caratulas.name}</h1>
                <h5>{Caratulas.genero}</h5>
                <p className='Descripcion'>{Caratulas.descripcion}</p>
                <Button.Group>
                  <Button as={Link} to={Caratulas.link}>Mas informacion</Button>
                  <Button.Or />
                  <Button positive>Ver ahora</Button>
                </Button.Group>
              </div>
            </td>
          </table>
          */}

            
          </div>
        
        ))}
        </div>



    </div>
  )
}
