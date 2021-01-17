import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    allCity: [],
    short:[]
  },
  reducers: {
    fetch: (state, action) => {
      state.allCity = [...action.payload];
    },
    deleteRec: (state, action)=>{
      var temp=state.allCity.filter((t)=>{
        return t.name!=action.payload
      })
      state.allCity = [...temp]
     
      var temp1=state.short.filter((t)=>{
        return t.name!=action.payload
      })
      state.short = [...temp1]

    },
    adrec:(state, action)=>{
      var flag=false
     console.log(action.payload.name)
     state.short.forEach((v)=>{
        if(v.name===action.payload.name
        )
        flag=!flag
     })
     if(!flag){
        state.short.push(action.payload)
        console.log(state.short)}},
    addNewCity:(state, action)=>{
console.log(action.payload)
var obj1={
name:action.payload[2],
capital:action.payload[1],
region:action.payload[0],

}
state.allCity.push(obj1)
    }    
    
  },
});

export const { fetch,deleteRec,adrec,addNewCity } = citySlice.actions;

export const selectCity=(state)=>state.city.allCity
export const selectShort=(state)=>state.city.short
export default citySlice.reducer;
