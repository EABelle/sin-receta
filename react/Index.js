import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Resize from 'react-resize-to-aspect-ratio';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';


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
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={handleClose}
          bodyStyle={{
            backgroundColor: 'black',
            color: 'white'
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
            <a href="http://localhost:3000/download/sin-receta-momento-de-furia.zip">
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
