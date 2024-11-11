import { getAllFoodsFail, getAllFoodsRequest, getAllFoodsSuccess, getSearchFoodsFail, getSearchFoodsRequest, getSearchFoodsSuccess } from "../Slice/foodListSlice"



const getAllFoods = (categoryInfo)=>async(dispatch)=>{
    try {
        dispatch(getAllFoodsRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/food/getall/${categoryInfo}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(getAllFoodsSuccess(data))
        }
        else{
            dispatch(getAllFoodsFail(data.message))
        }
    } catch (error) {
        dispatch(getAllFoodsFail(error.message))
    }
}

const searchFoods = (keyword)=>async(dispatch)=>{
    try {
        dispatch(getSearchFoodsRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/food/search/${keyword}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(getSearchFoodsSuccess(data))
        }
        else{
            dispatch(getSearchFoodsFail(data.message))
        }
    } catch (error) {
        dispatch(getSearchFoodsFail(error.message))
    }
}

export {
    getAllFoods,
    searchFoods
}

