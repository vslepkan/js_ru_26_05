import React, { PropTypes } from 'react'
import Article from './Article'

function ArticleList(props) {
    const { articles, comments } = props;

    const articleItems = articles.map((article) => <li key={article.id}><Article article = {article} comments = {comments}/></li>);

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList