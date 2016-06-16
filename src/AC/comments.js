import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE } from '../constants'
import AppDispatcher from '../dispatcher'
import { asyncACFactory, loadCommentsForArticleCall } from './webUtils'

export function addComment(articleId, comment) {
    const id = Date.now()
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadCommentsForArticle = asyncACFactory(loadCommentsForArticleCall, LOAD_COMMENTS_FOR_ARTICLE)