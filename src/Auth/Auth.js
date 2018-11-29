import React from 'react'
import Forms from './Forms'



class Auth extends React.Component {
    state = {
        username: '',
        password: '',
        isUserLoggedIn: false
    }

    UserHandler = event => this.setState({ username: event.target.value })
    PasswordHandler = event => this.setState({ password: event.target.value })

    onLogClick = () => { }
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