import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Resize from 'react-resize-to-aspect-ratio';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
const DIALOG_BODY_STYLE = {
  backgroundColor: 'black',
  color: 'white',
  border: 'solid 1px #1a0000',
}
var URLS = require('./const/links')
var MDF_URL = URLS.mdf

export default class Index extends React.Component {

  constructor(){
    super()
    this.state = {
      open: true,
    };
  }

  render() {
    let handleClose = () => this.setState({open: false})

    return(
      <div>
        <div id="indexHead">
          <img src={"../images/momento/MdF-logo.png"} width={240} />
        </div>
        <Resize aspectRatio="16:9">
          <div id="player" />
        </Resize>
        <div className="nosotros">
          <p className="membersTitle">Sin Receta somos:</p>
          <p className="memberName">Fernando Luis Menéndez Pérez - Voz</p>
          <p className="memberName">Franco "Bilo" Menéndez - Guitarra y Coros</p>
          <p className="memberName">>Esteban Bellegarde - Guitarra</p>
          <p className="memberName">Gabriel de los Santos - Trompeta y Coros</p>
          <p className="memberName">Cristian Aguirre - Trombón y Coros</p>
          <p className="memberName">Guillermo "Gallo" Morana - Saxo</p>
          <p className="memberName">Daniel Viale - Bajo</p>
          <p className="memberName">Nahuel Zapata - Batería</p>
        </div>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={handleClose}
          bodyStyle={DIALOG_BODY_STYLE}
        >
          <div id="downloadDialogButton" >
            <IconButton onClick={handleClose}>
              <ContentClear color="white"/>
            </IconButton>
          </div>
          <div className="dialogItem">
            <img src="../images/momento/momento-cover.jpg" width={240}/>
          </div>
          <div className="dialogItem">
            <a href={MDF_URL}>
            <FlatButton
              label="DESCARGAR DISCO"
              primary={true}
              onClick={handleClose}
              /></a>
          </div>
        </Dialog>
      </div>
    )
  }
}
