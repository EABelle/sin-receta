import React from 'react';

const style = {
  marginRight:15,
  marginLeft: 15
}

export default class Index extends React.Component {
  render() {
    return(
      <div style={{marginTop: '20%', paddingBottom: '20%', display: 'block', overflow: 'hidden'}}>
        <h3 style={{textAlign: 'center', color: 'white', fontFamily: 'helvetica'}}>
          Sitios:
        </h3>
        <div style ={{
            display: 'block',
            textAlign: 'center',
          }}>
          <a href="https://www.facebook.com/SinRecetaOficial">
            <img src="../images/facebook.png" width={120} style={style}></img>
          </a>
          <a href="https://www.instagram.com/sin.receta/">
            <img src="../images/instagram.png" width={120} style={style}></img>
          </a>
          <a href="#">
            <img src="../images/spotify.png" width={120} style={style}></img>
          </a>
          <a href="https://www.youtube.com/user/7sinreceta">
            <img src="../images/youtube.png" width={120} style={style}></img>
          </a>
          <a href="mailto:sinrecetaoficial@gmail.com">
            <img src="../images/gmail.png" width={120} style={style}></img>
          </a>
        </div>
      </div>
    )
  }
}
