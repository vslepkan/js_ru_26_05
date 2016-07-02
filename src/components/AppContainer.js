import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectToStore from '../decorators/connectToStore'

class AppContainer extends Component {
    render() {
        return <ArticleList articles = {this.props.articles} />
    }
}


function getState(stores) {
    const { articles } = stores
    return {
        articles: articles.getAll()
    }
}

export default connectToStore(null, getState)(AppContainer)