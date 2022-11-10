export const cartReducer = (state , action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,{...action.payload , qty:1}];
        case "REMOVE_FROM_CART":
            return  state.filter(c => c.id!== action.payload.id);

        case "INCREMENT":
            console.log(action.payload.qty)
            return state.map(item => item.id === action.payload.id  ?{...item , qty:item.qty  +1} :item);

        
        case "DECREMENT":
                return state.map(item => item.id === action.payload.id ?{...item , qty:(item.qty == 1) ? item.qty : item.qty-1} :item)
        default: 
        return state;
    }
}
