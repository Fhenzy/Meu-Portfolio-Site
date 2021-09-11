import React from 'react'
import './Navbar.css'

const Navbar = () =>
 
<header className="container-fluid">
  <nav id="navegar"className="nav justify-content-between">
    <div id="nome"> 
      <h1 className="title"> MyProjects </h1>
    </div>
    <div className="d-flex align-items-end">
      <ul className="d-flex justify-content-between">
         <a class="nav-link" href="#projeto">Projetos</a>
         <a class="nav-link" href="#sobreMin">Inicio</a>
         <a class="nav-link" href="#eu">Sobre Min:</a>
      </ul>
    </div>
  </nav>
</header>

export default Navbar;