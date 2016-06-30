import React from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import AppContainer from './containers/AppContainer'
import Counter from './containers/Counter'
import ArticleList from './containers/ArticleList'
import Article from './containers/Article'
import CommentPagination from './containers/CommentPagination'
import CommentPage from './containers/CommentPage'
import NewArticlePage from './containers/NewArticle'
import NotFoundPage from './components/NotFoundPage'
import SelectArticle from './components/SelectArticle'

export default (
    <Router history = {browserHistory}>
        <Redirect from = "/" to = "/articles" />
        {/*<Redirect from = "/comments" to="/comments/1" />*/}
        <Route path = "/" component = {AppContainer}>
            <Route path = "counter" component = {Counter} />
            <Route path = "articles" component = {ArticleList} >
                <IndexRoute component = {SelectArticle} />
                <Route path = "new" component = {NewArticlePage} />
                <Route path = ":id" component = {Article} />
                <Route path = "/show/:id" component = {Article} />
            </Route>
            <Route path = "comments" component = {CommentPagination}>
                <IndexRedirect to = "1"/>
                <Route path = ":page" component = {CommentPage} />
            </Route>
        </Route>
        <Route path = "*" component = {NotFoundPage} />
    </Router>
)