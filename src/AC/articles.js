import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, SUCCESS, START } from '../constants'
import $ from 'jquery'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function loadAllArticles() {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        $.get('/api/article')
            .done(response => dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            }))
    }
}

/*
//optional HW
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        payload: {},
        callAPI: '/api/article'
    }
}
*/
