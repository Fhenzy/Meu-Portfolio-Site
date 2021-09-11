import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Card from './components/Card/Card.jsx'
import Netflix from './assets/netflix.png'
import Insta from './assets/insta.png'
import Cep from './assets/cep.png'
import Restaurant from './assets/restaurante.png'
import Marvel from './assets/marvel.png'
import Clima from './assets/clima.png'
import CardPrincipal from './components/CardPrincipal'
import './app.css';
import SobreMin from './components/SobreMin'

function App() {
  return (
  <div id="tudo">
   <Navbar/>
   <Home/>
   <div id="projeto" className="container-fluid mt-4">
      <CardPrincipal title="Jogo-da-cobrinha"
            description="Jogo da cobrinha no navegador, em JAVASCRIPT, HTML, CSS E BOOTSTRAP  ( Clique em jogue agora para jogar usando as setas do teclado para mover a cobrinha )." 
            link="https://github.com/Fhenzy/Jogo-da-cobrinha"
            site="https://fhenzy.github.io/Jogo-da-cobrinha/"
       />
     <div className="row">      
       <div className="col-4 pl-2 pr-2">
        <Card foto={Insta} 
            description="Clone da página de login do instagram. usando HTML, CSS, JAVASCRIPT."
            title="Login insta"
            link="https://github.com/Fhenzy/clone-pagina-login-insta"
        />
       </div>      
       <div className="col-4 pl-2 pr-2">
        <Card foto={Netflix} 
            description="Clone da página Netflix, usando HTML, CSS, JAVASCRIPT, JQUERY E BOOTSTRAP."
            title="Clone Netflix"
            link="https://github.com/Fhenzy/Clone-da-netflix"  
        />
       </div>      
       <div className="col-4 pl-2 pr-2">
        <Card foto={Marvel} 
              description="SPA em REACT, consumindo API da Marvel, onde trás uma lista com Cards efeitos animados, usando HTML, CSS, JAVASCRIPT, BOOTSTRAP, INTEGRAÇÃO API"
              title="Cards Marvel"
              link="https://github.com/Fhenzy/Cards-Herois-Marvel"              
          />
       </div>          
       <div className="col-4">    
        <Card foto={Clima}
              description="SPA em REACT, onde API do google maps acessa sua lozalição e trás o mapa de onde você estiver, e API OpenWeather trás informações sobre o Clima da sua cidade, usando HTML, CSS, JAVASCRIPT."
              title="Previsão Clima"
              link="https://github.com/Fhenzy/localiza-o-clima-React"     
        />
      </div>
      <div className="col-4">    
        <Card foto={Restaurant}
              description="SPA em REACT, consumindo API do Google Maps, onde ele acessa sua localização e mostra o mapa de onde você esta, e trás uma lista de restaurantes próximos, usando HTML, CSS, JAVASCRITP."
              title="Restaurant Search"
              link="https://github.com/Fhenzy/Restaurant-Search"                         
        />
      </div>
      <div className="col-4">    
        <Card  foto={Cep}
               description="Um projeto onde você digita seu CEP escolhido e gera resultados de IBGE, logradouro e outros do CEP digitado. HTML, CSS, JAVASCRIPT, BOOTSTRAP, JQUERY, AJAX E INTEGRAÇÃO API."
               title="Busca CEP"
               link="https://github.com/Fhenzy/Busca-por-CEP"     
        />
      </div>
     </div>
   </div>
   <SobreMin/>
  </div>
  );
}

export default App;
