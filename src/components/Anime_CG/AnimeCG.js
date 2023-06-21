import React, { useEffect, useState } from 'react'
import {Segment, Image, Card, Icon} from "semantic-ui-react"
import "./AnimeCG.scss"

export function AnimeCG() {

  const [data, setData] = useState(null);
  let url = "https://api.consumet.org/anime/zoro/info?id=code-geass-lelouch-of-the-rebellion-i-initiation-589";

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
          <Image className='Img' src={data.image} floated='left' />
          <h1>{data.title}</h1>
          <p className='Texto'>
            {data.description}
          </p>

          { data.episodes.map((data, index) => (
            <a href={`${data.url}`}>
          <Card style={{ width: '150px', height: '178px' }}>
          <Card.Content header={data.number} />
          <Card.Content description={`Capitulo: ${data.title}`}/>
          <Card.Content extra>
            <Icon name='tv' />
          </Card.Content>
        </Card></a>
            ))}
          

        </Segment>
    </div>  )}  
  </div>
  )
}
