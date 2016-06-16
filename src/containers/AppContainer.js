import React, { Component, PropTypes } from 'react'

class AppContainer extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href = "#" onClick = {this.handleClick}>increment me</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default AppContainer