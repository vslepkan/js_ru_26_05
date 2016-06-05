import React, { PropTypes, Component } from 'react'
import Article from './Article'
import oneOpen from '../decorators/oneOpen'

class ArticleList extends Component {

    render() {
        const { articles, openedArticle, isOpen } = this.props;
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                openArticle = {openedArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default oneOpen(ArticleList)