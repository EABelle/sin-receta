import React from 'react';
var MediaQuery = require('react-responsive');

/* SPOTIFY
  <a href="#">
    <img src="../images/spotify.png" width={width} className="contactItem"></img>
  </a>
*/

var blocks = (width) => {
  return(
    <div className="contactBlocks">
      <a href="https://www.facebook.com/SinRecetaOficial">
        <img src="../images/facebook.png" width={width} className="contactItem"></img>
      </a>
      <a href="https://www.instagram.com/sin.receta/">
        <img src="../images/instagram.png" width={width} className="contactItem"></img>
      </a>
      <a href="https://www.youtube.com/user/7sinreceta">
        <img src="../images/youtube.png" width={width} className="contactItem"></img>
      </a>
    </div>
  )
}
export default class Index extends React.Component {
  render() {
    return(
      <div id="contactHead">
        <MediaQuery query='(max-width: 768px)'>
          <h4 className="contactParagraph">
            Sitios:
          </h4>
          {blocks(64)}
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          <h3 className="contactParagraph">
            Sitios:
          </h3>
          {blocks(120)}
        </MediaQuery>
        <h5 className="contactParagraph" id="contactFoot">
          sinrecetaoficial@gmail.com
        </h5>
      </div>
    )
  }
}
