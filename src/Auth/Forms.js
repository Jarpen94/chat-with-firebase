import React from 'react'

import Paper from 'material-ui/Paper'
import { RaisedButton } from 'material-ui'
import TextField from 'material-ui/TextField'


const Forms = (props) => (

    <Paper
        style={{
            margin: 20,
            padding: 20
        }}
    >
        <h2>Log In!</h2>
        <TextField
            name="email"
            type="email"
            floatingLabelText = "E-mail"
            value={props.username}
            onChange={props.UserHandler}
            fullWidth={true}
        />

        <TextField
            name='cokolwiek'
            floatingLabelText = "Password"
            value={props.password}
            onChange={props.PasswordHandler}
            type="password"
        />
        <div>
            <RaisedButton
                label={'Login'}
                primary={true}
                onClick={props.onLogClick}
            >
            </RaisedButton>

            <RaisedButton

                label={'Login by Google'}
                primary={true}
            >
            </RaisedButton>
        </div>


    </Paper>

)


export default Forms