import React from 'react';

const style = {
  marginRight:5,
  marginLeft: 5
}

/* SPOTIFY
<li>
  <a href="#">
    <img src="../images/spotify.png" width={24} style={style}></img>
  </a>
</li>
*/

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer" style={{position: 'relative', marginBottom: -20}}>
      	<div className="container">
      		<div className="footer-bottom">
      		<div className="copy-right" style={{fontFamily: 'roboto'}}>
      			<p>© 2011 - 2016 Sin Receta © Todos los derechos reservados.</p>
      			<ul className="social">
              <li>
                <a href="https://www.facebook.com/SinRecetaOficial">
                  <img src="../images/facebook.png" width={24} style={style}></img>
                </a>
              </li>
              <li>
              <a href="https://www.instagram.com/sin.receta/">
                <img src="../images/instagram.png" width={24} style={style}></img>
              </a>
              </li>
              <li>
              <a href="https://www.youtube.com/user/7sinreceta">
                <img src="../images/youtube.png" width={24} style={style}></img>
              </a>
            </li>
            <li>
              <a href="mailto:sinrecetaoficial@gmail.com">
                <img src="../images/gmail.png" width={24} style={style}></img>
              </a>
            </li>
      			</ul>
      		</div>
          </div>
        </div>
        <div style ={{textAlign: 'center', color:'white', fontFamily: 'roboto', marginTop: 15}}>sinrecetaoficial@gmail.com </div>
      <div style ={{textAlign: 'center', color:'white', fontFamily: 'roboto', marginTop: 30}}>Developed by EABelle</div>
      </div>
    )
  }
}
