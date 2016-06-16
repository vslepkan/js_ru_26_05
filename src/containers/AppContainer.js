import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'

class AppContainer extends Component {
    static propTypes = {
        store: PropTypes.object
    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <Counter />
                </div>
            </Provider>
        )
    }
}

export default AppContainer