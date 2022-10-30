const {createSlice} = require("@reduxjs/toolkit");
export const STATUSES ={
    IDLE:'200 SUCCESS',
    ERROR : "404 ERROR",
    LOADING : "Loading",
}

const getproductdata = createSlice({
    name : 'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        productget(state, action){
            state.data = action.payload;
        },
        productstatus(state, action){
            state.status = action.payload;
        }
    },
})


export const {productget,productstatus} = getproductdata.actions;
export default getproductdata.reducer;


//thunks

export function fetchproductdata(){
    return async function fetchProductThunk(dispatch,getState){
dispatch(productstatus(STATUSES.LOADING));
try{
    const res =  await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    dispatch(productget(data))
    dispatch(productstatus(STATUSES.IDLE))
} 
catch(err){
dispatch(productstatus(STATUSES.ERROR));
}
    }
}