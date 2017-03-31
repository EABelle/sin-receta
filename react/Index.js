import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
        <div id="player" style={{marginTop: 250}}></div>
          <Dialog
            modal={false}
            open={this.state.open}
            onRequestClose={handleClose}
            bodyStyle={{
              backgroundColor: 'black',
              color: 'white'
            }}
          >
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
              <FlatButton
                label="DESCARGAR DISCO"
                primary={true}
                onClick={handleClose}
                />
            </div>
          </Dialog>
        </div>
    )
  }
}
