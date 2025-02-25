
import { createSlice } from "@reduxjs/toolkit";


type Prop = {
    value: string,
    original: string
    credit: any
}

const initialState: Prop = {
    value: '/assets/image_wo_bg.png',
    original: '/assets/image_w_bg.png',
    credit: null
};

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        setUrl: (state, action) => {
            state.value = action.payload
            console.log('YOUR STATE', action.payload)
        },
        setOriginal: (state, action) => {
            state.original = action.payload
        },
        setCredit: (state, action) => {
            state.credit = action.payload
        }
    }
})

export const urlsliceActions = urlSlice.actions
export default urlSlice
