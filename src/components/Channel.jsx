import React from 'react';
import {ListItem, Avatar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Channel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <ListItem left>{this.props.channel}</ListItem>
        )
    }
}

export default Channel;