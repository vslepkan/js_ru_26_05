import BasicStore from './BasicStore'
import { DELETE_ARTICLE, ADD_COMMENT, CHANGE_FILTER, LOAD_ALL_ARTICLES,
    LOAD_COMMENTS_FOR_ARTICLE, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL} from '../constants'
import { DateUtils } from 'react-day-picker'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._filters = {}
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

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break

                case LOAD_ALL_ARTICLES + SUCCESS:
                    response.forEach(this._add)
                    this.loading = false
                    break

                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = error
                    this.loading = false
                    break

                case LOAD_ARTICLE_BY_ID + START:
                    this.getById(payload.id).loading = true
                    break

                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this._add(response)
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    this.getById(payload.id).loadingComments = true
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    this._waitFor(['comments'])
                    this.getById(payload.id).loadingComments = false
                    break

                case CHANGE_FILTER:
                    this._filters[payload.filter] = payload.value
                    break

                default:
                    return
            }

            this._emitChange()
        })
    }

    getFilters() {
        return this._filters
    }

    getFiltered() {
        const { date : { from, to } = {}, selected = []} = this.getFilters()
        return this.getAll()
            .filter((article) => !selected.length || selected.includes(article.id))
            .filter((article) => !(from || to) || DateUtils.isDayInRange(new Date(article.date), { from, to }))

    }
}