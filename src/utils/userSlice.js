import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        //As soon as the user logs in, the user will be added to the state
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export const {addUser,removeUser}=userSlice.actions;

export default userSlice.reducer;