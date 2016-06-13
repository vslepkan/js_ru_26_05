import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import connectToStore from '../decorators/connectToStore'
import { loadAllArticles } from '../AC/articles'

class AppContainer extends Component {

    componentDidMount() {
        loadAllArticles()
    }

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