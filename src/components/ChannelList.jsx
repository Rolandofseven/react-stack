import React from 'react';
import Channel from './Channel.jsx'
import {Card, List} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class ChannelList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            channels: ['Dogs','Cats']
        };
    }

    render(){
        var channelNodes = this.state.channels.map((channel)=>{
            return (
                <Channel channel={channel} />
            );
        });
        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;