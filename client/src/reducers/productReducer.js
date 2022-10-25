import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "../actions/types"


export const productReducer = (state= {},action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {products:action.data,filteredProducts:action.data}

        case FILTER_SIZE:
            return {
                ...state,
                size:action.data.size,
                filteredProducts:action.data.products
            }    

        case FILTER_SORT:
            return {
                ...state,
                sort:action.data.size,
                filteredProducts:action.data.products
            }   
        default:
            return state    
    }

}