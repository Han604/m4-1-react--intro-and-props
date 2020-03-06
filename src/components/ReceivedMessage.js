import React from 'react';

function ReceivedMessage(props) {
    console.log(props)
    return <div className="chat-message">
        <p className='userName'>{props.user}</p>
        <img className='avatar'src={props.avatar} />
        <p className='messageBody'>{props.message}</p>
    </div>;
}

export default ReceivedMessage