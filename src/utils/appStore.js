import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gpttReducer from "./gptSlice";
const appStore=configureStore({
    reducer:{
            user:userReducer,
            movies:movieReducer,
            gpt:gpttReducer
    }
})

export default appStore;