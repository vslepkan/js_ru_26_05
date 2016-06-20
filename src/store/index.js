import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { normalizedComments } from '../fixtures'
import randomId from '../middlewares/randomId'

const enhancer = applyMiddleware(randomId)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store