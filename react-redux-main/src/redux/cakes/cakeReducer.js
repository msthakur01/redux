import { BUY_CAKE } from "./cakeTypes";

const initialState ={
    numberOfCakes: 20 ,
}

const cakeReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes:state.numberOfCakes - payload , 
            }
    
        default:return state;
    }
}

export {cakeReducer}