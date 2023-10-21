import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./img/wut1.png"
import game from "./img/ng4.png";
import Home from "./img/h.png"
import apps from "./img/aw3.png"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark nav-color">
        <div className="container-fluid ">
          <Link className="navbar-brand" id="ajay" to="/"><img style={{ width: "40px" }} src={logo} /> Windows Universal Tool </Link>

          <button className="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <i style={{ fontSize: "28px" }} className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navul">
              <div className="c" id="c">
                <ul className="navbar-nav " id="ul">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <img style={{ width: "25px" }} src={Home} /><span className='link-name' style={{ fontWeight: "600" }}>Home</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact/">
                      <img className="game-Logo" src={game} /><span className='link-name' style={{ fontWeight: "600" }}>Game</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to="/about/">
                      <img style={{ width: "25px" }} src={apps} /><span className='link-name' style={{ fontWeight: "600" }}>Apps</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            <div className="navbar-collapse justify-content-end"></div>
            <div className="form-navbar">
              <form className="d-flex">
                <input className="form-control form-control-sm me-2" type="text" placeholder="Search" />
                <button className="btn btn-sm glass" id="btn" type="button">Search</button>
              </form>

            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar