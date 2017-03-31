import React from 'react';

const style = {
  marginRight:5,
  marginLeft: 5
}

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer" style={{zIndex: 99}}>
      	<div className="container" style={{zIndex: 100}}>
      		<div className="footer-bottom" style={{zIndex: 101}}>
      		<div className="copy-right" style={{zIndex: 102}}>
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
              <a href="#">
                <img src="../images/spotify.png" width={24} style={style}></img>
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
      </div>
    )
  }
}
