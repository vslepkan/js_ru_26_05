import BasicStore from './BasicStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break

                case ADD_COMMENT:
                    this._waitFor(['comments'])
                    const article = this.getById(payload.articleId)
                    article.comments = (article.comments || []).concat(payload.comment.id)

                default:
                    return
            }

            this._emitChange()
        })
    }
}