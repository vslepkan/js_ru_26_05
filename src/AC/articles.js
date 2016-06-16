import AppDispatcher from '../dispatcher'
import { loadAllArticlesCall, loadArticleByIdCall, asyncACFactory } from './webUtils'
import { DELETE_ARTICLE, LOAD_ARTICLE_BY_ID, LOAD_ALL_ARTICLES, CHANGE_FILTER } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}

export function changeFilter(filter, value) {
    AppDispatcher.dispatch({
        type: CHANGE_FILTER,
        payload: {
            filter, value
        }
    })
}

export const loadAllArticles = asyncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES)
export const loadArticleById = asyncACFactory(loadArticleByIdCall, LOAD_ARTICLE_BY_ID)