export const ACTIONS = {
    ADD_ITEM_TO_BASKET: 'ADD_ITEM_TO_BASKET',
}

export const addItemToBasketAction = (items) => ({ type: ACTIONS.ADD_ITEM_TO_BASKET, payload: items })