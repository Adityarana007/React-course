import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // action: reducer fn()
        addItem: (state, action) => {

            // Vanilla (older redux) => DON'T MUTATE STATE, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState

            // mutating/modifying the state directly over here => returning not mandatory
            console.log('statess', state)
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // originalState = ["pizza"]
        clearCart: (state) => {
            // RTK - Either mutate the existing state or return a new state 
            console.log('clearCart___', current(state))
            // state.items.length = 0 // originalState = []
            return {items: []} // whatever we return (this new object) from this reducer will replace whatever is there in original state {items: []}
        }
    }
});

// createSlice will return an object


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer