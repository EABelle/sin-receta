import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Resize from 'react-resize-to-aspect-ratio';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
var host = "31.220.58.84"

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
        <div style={{
            display: 'block',
            textAlign: 'center',
            position: 'relative',
            margin: '0 auto',
            marginTop: "5%"
          }}>
          <img src={"../images/momento/MdF-logo.png"} width={240} />
        </div>
        <Resize aspectRatio="16:9">
          <div id="player" style={{
            display:'block',
            position: 'relative',
            margin: '0 auto',
            marginTop: "5%",
            width: "50%",
            height: "56.25%",
            maxWidth: 800,
            maxHeight:450,
          }}/>
        </Resize>
        <div style = {{position:'relative', margin:'0 auto', marginTop: '-24%', paddingBottom: '5%', color: 'white', fontFamily: 'roboto'}}>
          <p style = {{textAlign: 'center', margin:'0 auto', fontWeight: 'bold', marginBottom: 2}}>Sin Receta somos:</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Fernando Luis Menéndez Pérez - Voz</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Franco "Bilo" Menéndez - Guitarra y Coros</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Esteban Bellegarde - Guitarra</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Gabriel de los Santos - Trompeta y Coros</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Cristian Aguirre - Trombón y Coros</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Guillermo "Gallo" Morana - Saxo</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Daniel Viale - Bajo</p>
          <p style = {{textAlign: 'center', margin:'0 auto'}}>Nahuel Zapata - Batería</p>
        </div>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={handleClose}
          bodyStyle={{
            backgroundColor: 'black',
            color: 'white',
            border: 'solid 1px #1a0000',
            backgroundImage: 'url("../images/momento/fondo-original.jpg")',
          }}
        >
          <div style={{position: 'absolute', top: 0, right: 0, marginRight: 5, marginLeft: 5}}>
            <IconButton onClick={handleClose}>
              <ContentClear color="white"/>
            </IconButton>
          </div>
          <div style={{
              display: 'block',
              textAlign: 'center',
              position: 'relative',
              margin: '10 auto'
            }}>
            <img src="../images/momento/MdF-logo.png" width={240}/>
          </div>
          <div style={{
              display: 'block',
              textAlign: 'center',
              position: 'relative',
              margin: '10 auto'
          }}>
            <a href={"http://"+host+":3001/download/sin-receta-momento-de-furia.zip"}>
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
