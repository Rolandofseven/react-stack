import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
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
                    <Tab label="Item One"></Tab>
                    <Tab label="Item Two" />
                    <Tab label="Item Three" href="#basic-tabs" />
                </Tabs>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width:'100%',
                    margin: '30px auto 30px'
                }}>
                    <ChannelList />
                    <MessageList />
                </div>
                <MessageBox />
            </MuiThemeProvider>
        );
    }
}

export default App;