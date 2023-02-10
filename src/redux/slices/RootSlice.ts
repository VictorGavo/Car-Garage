import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        color: 'Color',
        make: 'Make',
        model: 'Model',
        year: 'Year',
    },
    reducers: {
        chooseColor: (state, action) => { state.color = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseColor, chooseMake, chooseModel, chooseYear } = rootSlice.actions;