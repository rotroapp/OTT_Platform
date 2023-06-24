import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommended : null,
    originals : null,
    newdisney : null,
    trending : null
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers : {
        setMovies(state, action)
        {
            state.recommended = action.payload.recommended;
            state.originals = action.payload.originals;
            state.newdisney = action.payload.newdisney;
            state.trending = action.payload.trending;
        }
    }
});

export default movieSlice;
export const movieSliceaction = movieSlice.actions;