import React from 'react';
var MediaQuery = require('react-responsive');

const style = {
  marginRight:15,
  marginLeft: 15
}

var blocks = (width) => {
  return(
    <div style ={{
        display: 'block',
        textAlign: 'center',
      }}>
      <a href="https://www.facebook.com/SinRecetaOficial">
        <img src="../images/facebook.png" width={width} style={style}></img>
      </a>
      <a href="https://www.instagram.com/sin.receta/">
        <img src="../images/instagram.png" width={width} style={style}></img>
      </a>
      <a href="#">
        <img src="../images/spotify.png" width={width} style={style}></img>
      </a>
      <a href="https://www.youtube.com/user/7sinreceta">
        <img src="../images/youtube.png" width={width} style={style}></img>
      </a>
      <a href="mailto:sinrecetaoficial@gmail.com">
        <img src="../images/gmail.png" width={width} style={style}></img>
      </a>
    </div>
  )
}
export default class Index extends React.Component {
  render() {
    return(
      <div style={{marginTop: '20%', paddingBottom: '20%', display: 'block', overflow: 'hidden'}}>
        <h3 style={{textAlign: 'center', color: 'white', fontFamily: 'helvetica'}}>
          Sitios:
        </h3>
        <MediaQuery query='(max-width: 768px)'>
          {blocks(78)}
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          {blocks(120)}
        </MediaQuery>
      </div>
    )
  }
}
