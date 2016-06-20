import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'
import { toArray } from '../store/utils'
import { loadAllArticles } from '../AC/articles'

class ArticleListContainer extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return (
            <ArticleList articles = {this.props.articles} />
        )
    }
}

export default connect(state => ({
    articles: toArray(state.articles.toJS())
}), { loadAllArticles })(ArticleListContainer)