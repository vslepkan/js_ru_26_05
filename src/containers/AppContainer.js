import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import ArticleList from './ArticleList'

class AppContainer extends Component {
    static propTypes = {
        store: PropTypes.object
    };
    state = {
        user: ''
    }
    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <form onSubmit = {this.changeUser}>
                        username: <input value={this.state.user} onChange={this.handleChange}/>
                    </form>
                    <Counter />
                    <ArticleList />
                </div>
            </Provider>
        )
    }

    handleChange = (ev) => {
        this.setState({
            user: ev.target.value
        })
    }

    changeUser = (ev) => {
        ev.preventDefault()
    }
}

export default AppContainer