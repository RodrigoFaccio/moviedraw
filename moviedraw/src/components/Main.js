import React from 'react';
import { Container,FormBox,Button,Imagem,Overview} from './Styles';
import {AiFillStar} from "react-icons/ai";

import axios from 'axios';



function Main() {
    const endpointfilme = 'https://image.tmdb.org/t/p/w500';

    

    const [filmeName,setFilmeName] = React.useState();
    const [filmeNota,setFilmeNota] = React.useState();
    const [filmeImg,setFilmeImg] = React.useState();
    const [filmeOverview,setFilmeOverview] = React.useState();



    async function sortear (){
        
        await axios.get('https://api.themoviedb.org/3/movie/'+Math.floor(Math.random() * 1000 + 1)+'?api_key=c21423006a220205b03494791e5e849e')
        .then(response =>{
            console.log(response.data);
            
               setFilmeName(response.data.title);
               setFilmeNota(response.data.vote_average);
                setFilmeImg(response.data.poster_path);
                setFilmeOverview(response.data.overview);
            
        });
    }
    
  return (
      <>
      <h1>Qual filme vamos ver ??</h1>
    <Container>
        
       <FormBox>
           <h2>Sortear Filme</h2>
           <h4>{filmeName}</h4>
           <Imagem src={endpointfilme+filmeImg}/>
               


          
           <br/>
           
           <AiFillStar/> {filmeNota} 
           <br/> 
           <Overview>
               {filmeOverview}
           </Overview>
           <Button onClick={sortear}>Sortear</Button>
           <br/>
       </FormBox>
       <br/>

    </Container>
    </>
    
  );
}

export default Main;
