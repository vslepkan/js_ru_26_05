import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'
import { toArray } from '../store/utils'

class ArticleListContainer extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ArticleList articles = {this.props.articles} />
        )
    }
}

export default connect(state => ({
    articles: toArray(state.articles)
}))(ArticleListContainer)