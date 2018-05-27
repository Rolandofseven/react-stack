import React from 'react';
import MessageList from './MessageList.jsx';
import {AppBar, Tab, Tabs} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component{
    constructor(){
        super();

        
    }

    render(){
        return (
            <MuiThemeProvider>
                <AppBar title="Roland's App" />
                <br/>
                <Tabs >
                    <Tab label="Item One"><MessageList /></Tab>
                    <Tab label="Item Two" />
                    <Tab label="Item Three" href="#basic-tabs" />
                </Tabs>

                
            </MuiThemeProvider>
        );
    }
}

export default App;