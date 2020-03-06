import React from 'react';

function SentMessage(props) {
    return <div className="current-chat-message">
        <p className='current-messageBody'>{props.message}</p>
    </div>;
}

export default SentMessage