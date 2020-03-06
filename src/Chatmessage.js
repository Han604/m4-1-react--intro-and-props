import React from 'react';

import './ChatMessage.css';
import data from './data';
import SentMessage from './components/SentMessage'
import ReceivedMessage from './components/ReceivedMessage'

function ChatMessage(props) {
    console.log(props)
    if (props.messageType === 'sent') {
        return <SentMessage message={props.body} />;
    } else {
        return (
            <ReceivedMessage 
                message={props.body}
                user={props.user.username}
                avatar={props.user.avatar}
            />
        )}
}

export default ChatMessage;


