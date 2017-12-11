import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import client from '../Apollo'

import rootReducer from './reducer'

const composeEnhancers = composeWithDevTools({})

export const history = createBrowserHistory()

const middleware = [routerMiddleware(history), client.middleware(), thunk]

// Here we should import our store type from types and use it!!
function configureStore() {
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)))
}

export const store = configureStore()
