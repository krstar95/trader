import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { rootEpic } from './rootEpic'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

const epicMiddleware = createEpicMiddleware()

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(thunk, epicMiddleware)
    )
  )

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
