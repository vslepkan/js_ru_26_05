import React, { Component as ReactComponent} from 'react'
import stores from '../stores'

export default (storeNames, getStateFromStores) => {
    storeNames = storeNames || Object.keys(stores)
    return (Component) => class ConnectToStore extends ReactComponent {
        constructor(props) {
            super(props)
            this.state = getStateFromStores(stores, props)
        }

        componentWillReceiveProps(props) {
            this.setState(getStateFromStores(stores, props))
        }

        componentWillMount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.addChangeListener(this.handleStoresChanged)
                )
        }

        componentWillUnmount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.removeChangeListener(this.handleStoresChanged)
                )
        }

        handleStoresChanged = () => {
            console.log('---', 123, 'changing')
            this.setState(getStateFromStores(stores, this.props));
        }

        render() {
            return <Component {...this.props} {...this.state}/>
        }
    }
}
