import { createSlice } from "@reduxjs/toolkit";

const intialstate = {
    name : '',
    email : '',
    photo : ''
}

const userSlice = createSlice({
    name : "uislice",
    initialState : intialstate,
    reducers : {
        setUserLoginDetail(state, action) {
            // const data = action.payload;
            
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setUserLogoutDetail( state) {
            state.name =  null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const sliceaction = userSlice.actions;
export default userSlice;