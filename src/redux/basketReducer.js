import { ACTIONS } from "./actions"
import { initialState } from "./store"

const basketReducer = (state = initialState.basket, action) => {
    switch(action.type) {
        case ACTIONS.ADD_ITEM_TO_BASKET: return {
            ...state,
            items: [...state.items, action.payload]
        }
        default: return state
    }
}

export default basketReducer