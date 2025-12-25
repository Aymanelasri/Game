import { createSlice } from '@reduxjs/toolkit';

const MaterialSlice = createSlice({
    name: 'material',
    initialState: {
        materiels: []
    },
    reducers: {
        addMaterial: (state, action) => {
            state.materiels.push(action.payload);
        },
        deleteMaterial: (state, action) => {
            state.materiels = state.materiels.filter(m => m.code !== action.payload);
        }
    }
});

export const { addMaterial, deleteMaterial } = MaterialSlice.actions;
export default MaterialSlice;