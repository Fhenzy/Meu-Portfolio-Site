import React from 'react'
import './Home.css' 
import Ideia from '../../assets/ideia.png'

const Home = () => {
    return (
     <div id="sobreMin" className="container-fluid d-flex justify-content-center">
       <div>
          <h1 id="t">Meu Portfólio</h1>
          <p id="d">Criei este Site com intuito de apresentar meus<br/>
             projetos pessoais, e cada projeto  possui um <br/>
             link com o download do código. <br/>
             Clique no jogue agora para poder jogar o <br/>
             meu projeto do jogo-da-cobrinha abaixo :</p>
         
          <a href="https://github.com/Fhenzy?tab=repositories" target="_blanck" className="btn btn-primary">Github</a>
          <a href="https://www.linkedin.com/in/diego-silva-bb0198203/" target="_blanck" className="btn btn-primary ml-3">Linkedin</a>
       </div>
       <div id="ideia" className="">
           <img src={Ideia} alt="foto"></img>
       </div>
    </div>
 )
}

export default Home;