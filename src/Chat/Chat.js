import React from 'react'
import NewMessageForm from './NewMessageForm';

class Chat extends React.Component {
    state = {
        newMessageText: 'krowa'
    }

    onNewMessageTextChangeHandler = (
        event => this.setState({ newMessageText: event.target.value })
    )

    onNewMessageAddClickHandler = () => { }




    render() {
        return (
            <div>

                <NewMessageForm />
            </div>
        )
    }
}

export default Chat