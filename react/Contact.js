import React from 'react';
var MediaQuery = require('react-responsive');

const style = {
  marginRight:15,
  marginLeft: 15,
  marginTop: 10,
  marginBottom: 10
}

/* SPOTIFY
  <a href="#">
    <img src="../images/spotify.png" width={width} style={style}></img>
  </a>
*/

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
      <a href="https://www.youtube.com/user/7sinreceta">
        <img src="../images/youtube.png" width={width} style={style}></img>
      </a>
    </div>
  )
}
export default class Index extends React.Component {
  render() {
    return(
      <div style={{marginTop: '20%', paddingBottom: '20%', display: 'block', overflow: 'hidden'}}>
        <MediaQuery query='(max-width: 768px)'>
          <h4 style={{textAlign: 'center', color: 'white', fontFamily: 'helvetica'}}>
            Sitios:
          </h4>
          {blocks(64)}
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          <h3 style={{textAlign: 'center', color: 'white', fontFamily: 'helvetica'}}>
            Sitios:
          </h3>
          {blocks(120)}
        </MediaQuery>
        <h5 style={{textAlign: 'center', color: 'white', fontFamily: 'helvetica', marginTop: 20}}>
          sinrecetaoficial@gmail.com
        </h5>
      </div>
    )
  }
}
