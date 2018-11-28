import React from 'react'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    incHandler = () => this.setState({ counter: this.state.counter + 1 })

    decHandler = () => this.setState({ counter: this.state.counter - 1 })


    saveToFirebase = () => {
        fetch(
            'https://poniedzialek-e01cf.firebaseio.com/counter.json',
            {
                method: 'PUT',
                body: JSON.stringify(this.state.counter)
            }
        )
    }

    componentDidUpdate() {
        this.saveToFirebase()
    }



    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

export default Counter