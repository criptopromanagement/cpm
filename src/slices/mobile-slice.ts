import { createSlice } from "@reduxjs/toolkit";

const mobileInitialState = {
    isMobile: false
}
export const slice = createSlice({
    name: "mobile",
    initialState: mobileInitialState,
    reducers: {
        setIsMobile: (state, { payload }) => {
            state.isMobile = payload
        }
    }
})

export const { setIsMobile } = slice.actions;
export const { reducer } = slice;