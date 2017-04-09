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
    console.log(this.props.children)
    return(
      <div>
        <div className="header" style={{position: 'fixed', width: '100%', zIndex:1000}}>
          <MediaQuery query='(min-width: 769px)'>
            <div className="logo">
              <h1><a href="index.html"><img src="images/logo.png" width="64"/></a></h1>
            </div>
          </MediaQuery>
          <MediaQuery query='(max-width: 768px)'>
            <img
              onClick={()=>this.setState({drawerOpen: !this.state.drawerOpen})}
              src="images/icon.png"
              width="24"
              alt=""
              style={{marginTop: 10, marginLeft: 10}}
            />
            <img src="images/logo.png" width="64" style={{float:'right'}}/>
          </MediaQuery>

          <div className="top-nav">

            <ul className="res">
              <li><a href="/"><span className="glyphicon glyphicon-home" aria-hidden="true"> </span></a></li>
              <li><Link to="albums">Discos</Link></li>
              <li><a href="https://www.youtube.com/user/7sinreceta/videos" target="_blank">Videoclips</a></li>
              <li className="nav-line"><Link to="contact">Contacto</Link></li>
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
          <MenuItem onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})} style={{color:'red'}}><a href="/">Home</a></MenuItem>
          <MenuItem onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})}><Link to="albums">Discos</Link></MenuItem>
          <MenuItem onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})}><a href="https://www.youtube.com/user/7sinreceta/videos" target="_blank">Videoclips</a></MenuItem>
          <MenuItem onTouchTap={()=>this.setState({drawerOpen: !this.state.drawerOpen})} className="nav-line"><Link to="contact">Contacto</Link></MenuItem>
        </Drawer>
      </div>

    )
  }
}
