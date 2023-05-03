import { createSlice } from "@reduxjs/toolkit";
interface State {
    currency: 'ARS' | 'USDT';
    change: number
}
const currencyInitialState: State = {
    currency: 'ARS',
    change: 215.26
}
export const slice = createSlice({
    name: "currency",
    initialState: currencyInitialState,
    reducers: {
        setCurrency: (state, { payload }) => {
            state.currency = payload
        }
    }
})

export const { setCurrency } = slice.actions;
export const { reducer } = slice;