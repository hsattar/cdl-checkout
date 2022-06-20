import { combineReducers, createStore } from "redux"
import basketReducer from "./basketReducer"

export const initialState = {
    basket: {
        items: []
    }
}

const rootReducer = combineReducers({ 
    basket: basketReducer,
})

export const configureStore = createStore(
    rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)