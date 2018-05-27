import React from 'react';
import Message from './Messages.jsx'
import {Card, List} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class MessageList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            messages: ['Hi maria there how are you','I am fine, how are you']
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message)=>{
            return (
                <Message message={message} />
            );
        });
        return (
            <Card>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;