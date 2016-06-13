import $ from 'jquery'
import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncACFactory(apiCall, type) {
    return () => {
        AppDispatcher.dispatch({
            type: type + START
        })

        apiCall()
            .done((response) => AppDispatcher.dispatch({
                type: type + SUCCESS,
                response
            }))
            .fail(error => AppDispatcher.dispatch({
                type: type + FAIL,
                error
            }))
    }
}

export function loadAllArticlesCall() {
    return $.get('/api/article')
}