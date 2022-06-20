import { ACTIONS } from "./actions"
import { initialState } from "./store"

const itemsReducer = (state = initialState.items, action) => {
    switch(action.type) {
        case ACTIONS.ADD_ITEM_TO_BASKET: return {
            ...state,
            basket: [...state.basket, action.payload]
        }
        case ACTIONS.CHNAGE_ITEM_OFFER: return {
            ...state,
            stock: state.stock.map(item => item.name === action.payload.name ? action.payload : item)
        }
        default: return state
    }
}

export default itemsReducer