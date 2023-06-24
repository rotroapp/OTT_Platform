import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./ui-slice";
import movieSlice from "./movies-slice";

const store = configureStore({
    reducer : {
        ui : userSlice.reducer,
        movie : movieSlice.reducer
    }
})

export default store;