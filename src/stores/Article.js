import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

export default class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super()
        this._items = {}
        initialState.forEach(this._add)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case 'DELETE_ARTICLE':
                    this._delete(payload.id)
                    this._emitChange()
                    break
            }
        })
    }

    _subscribe = (callback) => {
        AppDispatcher.register(callback)
    }

    getAll = () => {
        return Object.keys(this._items).map(this.getById)
    }

    getById = (id) => {
        return this._items[id]
    }

    _add = (item) => {
        this._items[item.id] = item
    }

    _delete = (id) => {
        delete this._items[id]
    }

    _emitChange = () => {
        this.emit('SOME_CHANGE_EVENT')
    }

    addChangeListener = (callback) => {
        this.on('SOME_CHANGE_EVENT', callback)
    }

    removeChangeListener = (callback) => {
        this.removeListener('SOME_CHANGE_EVENT', callback)
    }
}