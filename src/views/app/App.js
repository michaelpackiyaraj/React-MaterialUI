import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});



export class App extends React.Component{
    render(){//return a view ie virtual DOM
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="My AppBar" />
                <div>{this.props.children}</div>
            </MuiThemeProvider>
        )
    }
}
