import React from 'react'
import './Card.css'
import LazyLoad from 'react-lazy-load';


const Card = ({foto, description, title, link, site}) => {
    return (
     <div className="container">
       <div className="card mb-3 filler frente my-4" >
          <LazyLoad  offsetHorizontal={300} loading="lazy">
            <img className="card-img-top" src={foto} alt="Imagem de capa do card"/>
          </LazyLoad> 
        
          <div id="carta" className="card-body">     
            <h5 className="card-title">{title}</h5>     
            <p id="desc" className="card-text">{description}</p>  
            <a href={link}  className="card-text btn btn-primary ml-3" target="_blanck">Código GitHub</a>                    
          </div>
       </div>
     </div>
    )
}
export default Card;