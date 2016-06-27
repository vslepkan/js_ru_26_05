import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadCommentsForArticle } from '../AC/comments'
import { getRelation } from '../store/utils'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };
    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }

/*
    componentDidMount() {
        console.log('I am mounted')
    }

    componentWillReceiveProps({ isOpen, article }) {
        if (isOpen && getRelation(article, 'comments').includes(undefined) && !article.loadingComments) loadCommentsForArticle(article)
    }

    componentWillUpdate(nextProps) {
        console.log(this.props.isOpen, ' changes to ', nextProps.isOpen)
    }


*/
    componentWillReceiveProps({ isOpen, article, loadCommentsForArticle }) {
        if (!isOpen || article.get('loadedComments') || article.get('loadingComments')) return
        loadCommentsForArticle(article.get('id'))
    }

    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { article, isOpen } = this.props
        const comments = getRelation(article, 'comments')
        if (!isOpen) return null
        if (!article.get('loadedComments')) return <h3>Loading...</h3>

        if (!comments || !comments.size) return <h3>No comments yet</h3>

        const items = comments.map(comment => <li key = {comment.get('id')}><Comment comment = {comment} /></li>)
        return <div>
            <ul>{items}</ul>
            <NewCommentForm articleId={article.get('id')} />
        </div>
    }
}

export default connect(null, { loadCommentsForArticle })(toggleOpen(CommentList))