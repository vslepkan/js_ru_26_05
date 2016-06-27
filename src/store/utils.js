import store from './index'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!entity.get(relation) || !relStore) return []

    return entity.get(relation).map(id => relStore.getIn(['entities', id.toString()]))
}


export function fromArray(array) {
    return array.reduce((acc, item) => {
        return {...acc, [item.id]: item}
    }, {})
}

export function toArray(object) {
    return Object.keys(object).map(id => object[id])
}