import React from 'react';
import Message from './Messages.jsx'
import {Card, List} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Firebase from 'firebase';
import * as _ from 'lodash';

class MessageList extends React.Component{
    constructor(props)
    {
        super(props);
        let self = this;
        self.state = {
            messages: []
        };
        var config = {
            databaseURL: "https://react-stack-f4ca2.firebaseio.com",
        };
        this.firebaseref =Firebase.initializeApp(config);

        this.firebaseref.database().ref('/messages').once('value').then((snapshot) =>  {
            var messages = snapshot.val();
            self.setState({
                messages: messages
            });
            
            /*this.state ={
                messages:messages
            };
            alert(JSON.stringify(this.state.messages));
            */
           alert(JSON.stringify(this.state.messages));
        });
       
    }

    

    render(){
        var messageNodes = this.state.messages.map((message)=>{
            alert(message)
            return (
                <Message message={message.message} />
            );
        });
        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;