import BasicStore from './BasicStore'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS, LOAD_ALL_ARTICLES_FAIL } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break

                case ADD_COMMENT:
                    this._waitFor(['comments'])
                    const article = this.getById(payload.articleId)
                    article.comments = (article.comments || []).concat(payload.comment.id)
                    break

                case LOAD_ALL_ARTICLES_START:
                    this.loading = true
                    break

                case LOAD_ALL_ARTICLES_SUCCESS:
                    response.forEach(this._add)
                    this.loading = false
                    break

                case LOAD_ALL_ARTICLES_FAIL:
                    this.error = error
                    this.loading = false
                    break

                default:
                    return
            }

            this._emitChange()
        })
    }
}