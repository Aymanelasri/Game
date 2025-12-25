import { configureStore } from "@reduxjs/toolkit";
import MaterialSlice from "./MaterialSlice.jsx";

const Store = configureStore({
    reducer: {
        Material: MaterialSlice.reducer,

    },
});

export default Store;