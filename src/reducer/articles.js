import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter((article) => article.id != payload.id)
        case ADD_COMMENT: return articles.map(article => article.id != payload.articleId ? article :
            {...article, comments: (article.comments || []).concat(randomId)}
        )
    }

    return articles
}