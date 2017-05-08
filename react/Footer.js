import React from 'react';

/* SPOTIFY
<li>
  <a href="#">
    <img src="../images/spotify.png" width={24} className="footerItem"></img>
  </a>
</li>
*/

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer" id="footerHead">
      	<div className="container">
      		<div className="footer-bottom">
      		<div className="copy-right roboto-family">
      			<p>© 2011 - 2016 Sin Receta © Todos los derechos reservados.</p>
      			<ul className="social">
              <li>
                <a href="https://www.facebook.com/SinRecetaOficial">
                  <img src="../images/facebook.png" width={24} className="footerItem"></img>
                </a>
              </li>
              <li>
              <a href="https://www.instagram.com/sin.receta/">
                <img src="../images/instagram.png" width={24} className="footerItem"></img>
              </a>
              </li>
              <li>
              <a href="https://www.youtube.com/user/7sinreceta">
                <img src="../images/youtube.png" width={24} className="footerItem"></img>
              </a>
            </li>
      			</ul>
      		</div>
          </div>
        </div>
        <div className="footerFoot" id="footerMail">sinrecetaoficial@gmail.com </div>
      <div className="footerFoot" id="footerSignature">Developed by EABelle</div>
      </div>
    )
  }
}
