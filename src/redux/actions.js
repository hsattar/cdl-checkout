export const ACTIONS = {
    ADD_ITEM_TO_BASKET: 'ADD_ITEM_TO_BASKET',
    CHNAGE_ITEM_OFFER: 'CHNAGE_ITEM_OFFER',
}

export const addItemToBasketAction = (items) => ({ type: ACTIONS.ADD_ITEM_TO_BASKET, payload: items })
export const changeItemOfferAction = (item) => ({ type: ACTIONS.CHNAGE_ITEM_OFFER, payload: item })