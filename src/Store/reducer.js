
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'


import client from '../Apollo'

import pokedex from '../MyComponent/reducer'


const rootReducer = combineReducers({
  router: routerReducer,
  apollo: client.reducer(),
  pokedex
})


export default rootReducer
