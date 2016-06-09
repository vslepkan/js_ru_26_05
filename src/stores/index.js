import Article from './Article'
import BasicStore from './BasicStore'
import {normalizedArticles, normalizedComments} from '../fixtures'

export const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new BasicStore(stores, normalizedComments)
})

export const articleStore = stores.articles
export const commentStore = stores.comments

window.articleStore = articleStore