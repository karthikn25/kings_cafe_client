import { getAllCategoryFail, getAllCategoryRequest, getAllCategorySuccess } from "../Slice/categorySlice";


const getAllCategory = ()=> async(dispatch)=>{
    try {
        dispatch(getAllCategoryRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/category/get`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
      
    })
    const data = await res.json();
    console.log(data);
    if(res.ok){
        dispatch(getAllCategorySuccess(data))
    }else{
        dispatch(getAllCategoryFail(data.message))
    }
    } catch (error) {
        dispatch(getAllCategoryFail(error.message))
    }
}

export {
    getAllCategory
}