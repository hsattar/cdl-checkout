import { combineReducers, createStore } from "redux"
import itemsReducer from "./itemsReducer"

export const initialState = {
    items: {
        stock: [{name: "A", price: 50, multiBuyQty: 3, multiBuyPrice: 130}, {name: "B", price: 30, multiBuyQty: 2, multiBuyPrice: 45}, {name: "C", price: 20, multiBuyQty: 0, multiBuyPrice: 0}, {name: "D", price: 15, multiBuyQty: 0, multiBuyPrice: 0}],
        basket: []
    }
}

const rootReducer = combineReducers({ 
    items: itemsReducer,
})

export const configureStore = createStore(
    rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)