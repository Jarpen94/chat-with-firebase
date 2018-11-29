import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'

const NewMessageForm = (props) => (

    <Paper
        style={{
            position: 'fixed',
            padding: 20,
            bottom: 0,
            width: '100%',
            zIndex: 9999
        }}
    >

        <TextField
            name="text"
            type="text"
            value={props.newMessageText}
            onChange={props.onNewMessageTextChangeHandler}
            fullWidth={true}

        />

        <RaisedButton
            primary={true}
            onClick={props.onNewMessageAddClickHandler}
            label={'Wyślij wiadmość'}
            fullWidth={true}
        />

    </Paper>

)



export default NewMessageForm