import React from 'react'
import { render } from 'react-dom'
import { articles, normalizedComments } from './fixtures'
import ArticleList from './components/ArticleList'

render(<ArticleList articles = {articles} comments = {normalizedComments} />, document.getElementById('container'))