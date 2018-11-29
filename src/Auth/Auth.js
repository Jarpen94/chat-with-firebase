import React from 'react'
import Forms from './Forms'

import { auth } from '../firebase'



class Auth extends React.Component {
    state = {
        username: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                console.log(user)
            }
        )
    }

    UserHandler = event => this.setState({ username: event.target.value })
    PasswordHandler = event => this.setState({ password: event.target.value })

    onLogClick = () => {
        auth.signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(console.log)
            .catch(console.log)
    }

    onLogInByGoogleCLick = () => { }

    render() {
        return (
            this.state.isUserLoggedIn ?
                this.props.children
                :
                <Forms
                    username={this.state.username}
                    UserHandler={this.UserHandler}
                    PasswordHandler={this.PasswordHandler}
                    onLogClick={this.onLogClick}
                    onLogInByGoogleCLick={this.onLogInByGoogleCLick}



                />

        )
    }
}


export default Auth