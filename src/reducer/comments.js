import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { fromArray } from '../store/utils'

export default (comments = fromArray(normalizedComments), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
//        case ADD_COMMENT: return comments.concat({...payload.comment, id: randomId})
    }

    return comments
}