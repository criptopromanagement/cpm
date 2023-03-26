import { createSlice } from "@reduxjs/toolkit";

const isMobileInitialState = {
    isMobile: false
}
export const slice = createSlice({
    name: "isMobile",
    initialState: isMobileInitialState,
    reducers: {
        setIsMobile: (state, { payload }) => {
            state.isMobile = payload
        }
    }
})

export const { setIsMobile } = slice.actions;
export const { reducer } = slice;