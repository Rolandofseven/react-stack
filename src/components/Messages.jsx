import React from 'react';
import {ListItem, Avatar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Message extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <ListItem left>{this.props.message}</ListItem>
        )
    }
}

export default Message;