import React from 'react';
import Footer from './react/Footer'
import Banner from './react/Banner'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div style={{backgroundColor: 'black',}}>
            <Banner />
            <div style={{
                backgroundColor: 'black',
                backgroundImage: 'url("./images/momento/fondo.jpg")',
                backgroundSize: '100%',
              }}>
              <div style={{display: 'block', height: 50}} />
              {this.props.children}
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
    )
  }
}
