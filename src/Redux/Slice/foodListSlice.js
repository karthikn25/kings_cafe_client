import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    foods:[],
    loading:true,
    error:null
}

const foodSlice = createSlice({
    name:"food",
    initialState,
    reducers:{
        getAllFoodsRequest(state){
            state.loading = true;
            state.error= null;
        },
        getAllFoodsSuccess(state,action){
            state.loading = false;
            state.foods=action.payload
        },
        getAllFoodsFail(state,action){
            state.loading=false;
            state.error=action.payload;
        },
        getSearchFoodsRequest(state){
            state.loading=true;
        },
        getSearchFoodsSuccess(state,action){
            state.loading=false;
            state.foods=action.payload;
        },
        getSearchFoodsFail(state,action){
            state.loading=false;
            state.error=action.payload;
        }
    }
})

export const {
    getAllFoodsRequest,
    getAllFoodsSuccess,
    getAllFoodsFail,
    getSearchFoodsRequest,
    getSearchFoodsSuccess,
    getSearchFoodsFail
}=foodSlice.actions;

export default foodSlice.reducer;