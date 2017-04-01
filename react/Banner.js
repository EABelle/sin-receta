import React from 'react';
import { Link } from 'react-router'

export default class Banner extends React.Component {

  render() {
    console.log(this.props.children)
    return(
            <div className="header" style={{position: 'fixed', width: '100%', zIndex:1000}}>
              <div className="logo">
                <h1><a href="index.html"><img src="images/logo.png" width="64"/></a></h1>
              </div>
              <div className="top-nav">
                <span className="menu"> <img src="images/icon.png" alt=""/></span>
                <ul className="res">
                  <li><a href="/"><span className="glyphicon glyphicon-home" aria-hidden="true"> </span></a></li>
                  <li><Link to="albums">Discos</Link></li>
                  <li><a href="https://www.youtube.com/user/7sinreceta/videos" target="_blank">Videoclips</a></li>
                  <li className="nav-line"><Link to="contact">Contacto</Link></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
    )
  }
}
