import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
//import Filters from './Filters'
import oneOpen from '../decorators/oneOpen'

class ArticleList extends Component {

    render() {
        const { articles, isOpen, openItem } = this.props

        const articleItems = articles.map((article) => <li key={article.get('id')}>
            <Article article = {article}
                     isOpen = {isOpen(article.get('id'))}
                openArticle = {openItem(article.get('id'))}
            />
        </li>)

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                {/*<Filters />*/}
            </div>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired,

    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)