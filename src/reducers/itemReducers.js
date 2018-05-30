import items from '../petStoreItems';

const initialState = {
  items: items,
  cart: []
}

export default (state = initialState, action) => {  
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload.item]
      };
    case 'REMOVE_FROM_CART':      
      return {        
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    default:
      return state
  }  
}