import React from 'react'
import './Card.css'
import video from '../../assets/video-cobrinha.mp4';

const CardPrincipal = ({description, title, site, link}) => {
    return (
     <div id="containe" className="container-fluid mb-5 d-flex align-items-center">
        <video autoplay="autoplay" muted loop="true" > <source src={video} type="video/mp4"/> </video>    
        <div id="dv" className="d-flex justify-content-center">
            <a  href={link} className="btn btn-dark ml-3" target="_blanck">Código Github</a>
            <a  href={site} className="btn btn-dark ml-4" target="_blanck">Jogue Agora !</a>
        </div>
     </div>
    )
}
export default CardPrincipal;