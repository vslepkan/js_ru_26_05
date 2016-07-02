import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE, SUCCESS, START, FAIL } from '../constants'
import { normalizedComments } from '../fixtures'
import { fromArray } from '../store/utils'
import { fromJS, Map, OrderedMap, List } from 'immutable'

const defaultState = Map({
    entities: OrderedMap({}),
    loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId.toString()], fromJS({...payload.comment, id: randomId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.update('entities', entities => entities.merge(fromJS(fromArray(response))))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return comments.setIn(['pagination', payload.page], new List([]))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return comments
                .update('entities', entities => entities.merge(fromJS(fromArray(response.records))))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }

    return comments
}