import React from 'react';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
var MediaQuery = require('react-responsive');

export default class Banner extends React.Component {

  constructor(){
    super()
    this.state = {
      drawerOpen: false
    }
  }

  render() {
    return(
      <div>
        <div className="header">
          <MediaQuery query='(min-width: 769px)'>
            <div className="logo">
              <h1><a href="index.html"><img src="images/logo.png" width="64"/></a></h1>
            </div>
          </MediaQuery>
          <MediaQuery query='(max-width: 768px)'>
              <img
                onClick={()=>this.setState({drawerOpen: !this.state.drawerOpen})}
                src="images/icon.png"
                width="20"
                alt=""
                id="menuIcon"
              />
            <img src="images/logo.png" width="64" id="menuLogo"/>
          </MediaQuery>

          <div className="top-nav">

            <ul className="res">
              <li><a href="/"><span className="glyphicon glyphicon-home" aria-hidden="true"> </span></a></li>
              <li><Link to="albums" style={{fontFamily: 'geometos'}}>Discos</Link></li>
              <li><a href="https://www.youtube.com/user/7sinreceta/videos" target="_blank" style={{fontFamily: 'geometos'}}>Videoclips</a></li>
            <li><Link to="dates" style={{fontFamily: 'geometos'}}>Fechas</Link></li>
              <li className="nav-line"><Link to="contact" style={{fontFamily: 'geometos'}}>Contacto</Link></li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <Drawer
          docked={false}
          open={this.state.drawerOpen}
          style={{zIndex:1500, backgroundColor: 'black'}}
          swipeAreaWidth={400}
          containerStyle={{backgroundColor: 'black'}}
          onRequestChange={(open)=>this.setState({drawerOpen: open})}

        >
          <img src="images/logo.png" width="64" style={{position: 'relative', display: 'block'}}/>
          <a href="/">
            <MenuItem
              onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})}
              style={{color:'white', fontWeight: '', fontFamily: 'geometos',position: 'relative', display: 'block'}}
            >Home
            </MenuItem>
          </a>
          <Link to="albums">
            <MenuItem
              style={{color:'white', fontWeight: '', fontFamily: 'geometos'}}
              onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})}>
              Discos
            </MenuItem>
          </Link>
          <a href="https://www.youtube.com/user/7sinreceta/videos" target="_blank">
            <MenuItem
              style={{color:'white', fontWeight: '', fontFamily: 'geometos'}}
              onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})}>
              Videoclips
            </MenuItem>
          </a>
          <Link to="dates" >
            <MenuItem style={{color:'white', fontWeight: '', fontFamily: 'geometos'}}
              onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})} className="nav-line">
              Fechas
            </MenuItem>
          </Link>
          <Link to="contact" >
            <MenuItem style={{color:'white', fontWeight: '', fontFamily: 'geometos'}}
              onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})} className="nav-line">
              Contacto
            </MenuItem>
          </Link>
        </Drawer>
      </div>

    )
  }
}
