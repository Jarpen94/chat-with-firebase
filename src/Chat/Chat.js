import React from 'react'

import { auth, database } from '../firebase'
import { mapObjectToArray } from './utils'

import NewMessageForm from './NewMessageForm';
import MessagesList from './MessagesList'


const dbMessagesRef = database.ref('chat-messages')




class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }


    componentDidMount() {
        dbMessagesRef.on(
            'value',
            snapshot => this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse(),
                newMessageText: ''
            })
        )
    }

    componentWillUnmount() {
        dbMessagesRef.off()
    }


    onNewMessageTextChangeHandler = event => this.setState({ newMessageText: event.target.value })

    onNewMessageAddClickHandler = event => {
        event.preventDefault()

        dbMessagesRef.push({
            text: this.state.newMessageText,
            timestamp: Date.now(),
            author: {
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                img: auth.currentUser.photoURL || `https://api.adorable.io/avatars/50/${auth.currentUser.email}`

            }
        })
    }

    onDeleteMessageClickHandler = messageKey => {
        dbMessagesRef.child(messageKey)
            .remove()
    }


    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
                    onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
                />
                <MessagesList
                    messages={this.state.messages}
                    onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
                />
            </div>
        )
    }
}
export default Chat
