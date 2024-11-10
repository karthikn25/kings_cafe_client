import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    loading:true,
    categoryInfo:[],
    error:null
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        getAllCategoryRequest(state){
            state.loading = true; 
            state.error = null;
        },
        getAllCategorySuccess(state,action){
            state.loading = false;
            state.categoryInfo=action.payload;
        },
        getAllCategoryFail(state,action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})