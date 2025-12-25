import { configureStore } from "@reduxjs/toolkit";
import Candidateur from "./VoteSlice";

const Store= configureStore({
    reducer:{
        vote:Candidateur,
    }
});

export default Store;