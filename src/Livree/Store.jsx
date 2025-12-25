import { configureStore } from "@reduxjs/toolkit";
import LivreSlice from "./LivreSlice";

const store = configureStore({
    reducer: {
        livre: LivreSlice,
    },
});

export default store;