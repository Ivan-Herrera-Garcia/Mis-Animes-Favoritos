import React, { useEffect, useState } from 'react'
import {Segment, Image, Card, Icon, Header} from "semantic-ui-react"
import "./AnimesCM.scss"

export function AnimeCM() {

  const [data, setData] = useState(null)
  let url = "https://api.consumet.org/anime/zoro/info?id=chainsaw-man-17406";

  const fetchApi = async ()  => {
    try {
      const options = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        }
      };

      const response = await fetch(url, options);
      const responseJson = await response.json();
      setData(responseJson);
      console.log(data);
    } catch (error) {
      console.log(error);
    }};

  useEffect(() => {
    fetchApi()
  }, [data]);


  return (
    <div>
      {data && (
        <div className='Contenido'>
        <Segment>
          <Image className='Img' src={data.image} centered/>
          <Header as='h2' attached='top'>
          <h1>{data.title}</h1>
    </Header>
    <Segment attached>
    <p className='Texto'>
            {data.description}
          </p>
          <p className='Texto'>Total de capitulos: {data.totalEpisodes}
          <br/>Transmitida: {data.type}</p>

    </Segment>
        
          { data.episodes.map((data, index) => (
            <div className='Capitulos'>            <a href={`${data.url}`}>
          <Card style={{ width: '150px', height: '178px' }}>
          <Card.Content header={`Capitulo: ${data.number}`} />
          <Card.Content description={`Titulo: ${data.title}`}/>
          <Card.Content extra>
            <Icon name='tv' />
          </Card.Content>
        </Card></a></div>

            ))}
          

        </Segment>
    </div>  )}  
  </div>
  )
}
