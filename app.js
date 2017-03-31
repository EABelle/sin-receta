import React from 'react';
import Footer from './react/Footer'
import Banner from './react/Banner'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return(
        <MuiThemeProvider>
          <div style={{
              backgroundColor: 'black'
            }}>
            <img src="./images/momento/Tapa.jpg" style={{width: '100%', position: 'fixed', zIndex: 0}} />
            <Banner>
              {this.props.children}
            </Banner>
            <Footer />
          </div>
        </MuiThemeProvider>
    )
  }
}
