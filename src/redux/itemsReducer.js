import { ACTIONS } from "./actions"
import { initialState } from "./store"

const itemsReducer = (state = initialState.items, action) => {
    switch(action.type) {
        case ACTIONS.ADD_ITEM_TO_BASKET: return {
            ...state,
            basket: [...state.basket, action.payload]
        }
        default: return state
    }
}

export default itemsReducer