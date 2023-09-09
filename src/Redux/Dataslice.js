import { createSlice } from "@reduxjs/toolkit";

const allusers=createSlice({
    name:'Sample',
    initialState:{
        Data:[]
    },
    reducers:{
        addtofullinfo:(state,action)=>{
            state.Data.push(action.payload)
            console.log(action,'****')
        }
    }
})

export const {addtofullinfo}=allusers.actions
export default allusers.reducer