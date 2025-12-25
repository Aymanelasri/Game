import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "users",
  initialState: {
    users: []
  },
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },

    update: (state, action) => {
      const user = state.users.find(u => u.id === action.payload.edit);
      if (user) {
        user.nom = action.payload.nom;
        user.prenom = action.payload.prenom;
        user.email = action.payload.email;
      }
    },

    remove: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
  }
});

export const { add, update, remove } = appSlice.actions;
export default appSlice.reducer;
