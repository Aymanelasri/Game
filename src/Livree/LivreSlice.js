import { createSlice } from "@reduxjs/toolkit";

const LivreSlice = createSlice({
    name: 'livre',
    initialState: {
        livres: [
            { id: 1, title: 'Antigone', Page: 120 }
        ]
    },
    reducers: {
        addLivre: (state, action) => {
            state.livres.push(action.payload);
        },

        editLivre: (state, action) => {
            const livre = state.livres.find(livre => livre.id === action.payload.id);
            if (livre) {
                livre.title = action.payload.title;
                livre.Page = action.payload.Page;
            }
        },

        deleteLivre: (state, action) => {
            state.livres = state.livres.filter(l => l.id !== action.payload);
        }
    }
});

export const { addLivre, editLivre, deleteLivre } = LivreSlice.actions;
export default LivreSlice.reducer;
