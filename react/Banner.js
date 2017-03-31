import React from 'react';
import { Link } from 'react-router'

export default class Banner extends React.Component {

  render() {
    console.log(this.props.children)
    return(
      <div classname = "fondo">
        <div className="banner">
          <div className="container">
            <div className="header">
              <div className="logo">
                <h1><a href="index.html"><img src="images/logo.png" width="64"/></a></h1>
              </div>
              <div className="top-nav">
                <span className="menu"> <img src="images/icon.png" alt=""/></span>
                <ul className="res">
                  <li><a href="index.html" className="active"><span className="glyphicon glyphicon-home" aria-hidden="true"> </span></a></li>
                  <li><Link to="albums">Discos</Link></li>
                  <li><a href="https://www.youtube.com/user/7sinreceta/videos">Videoclips</a></li>
                  <li className="nav-line"><Link to="contact">Contacto</Link></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
