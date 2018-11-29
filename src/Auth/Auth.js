import React from 'react'
import Forms from './Forms'

import { auth, googleProvider } from '../firebase'
import FloatingActionButton from 'material-ui/FloatingActionButton'



class Auth extends React.Component {
    state = {
        username: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
                console.log(user)
            }
        )
    }

    UserHandler = event => this.setState({ username: event.target.value })
    PasswordHandler = event => this.setState({ password: event.target.value })

    onLogClick = () => {
        auth.signInWithEmailAndPassword(this.state.username, this.state.password)
            .catch(error => {
                alert('Ups, coś poszło nie tak!')
                console.log(error)
            })
    }

    onLogInByGoogleCLick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
    }

    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}
                        secondary={true}
                        onClick={this.onLogOutClickHandler}
                    >
                        x
                    </FloatingActionButton>

                    {this.props.children}
                </div>

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