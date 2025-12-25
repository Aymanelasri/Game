import { createSlice } from '@reduxjs/toolkit';
const Candidateur=createSlice({
   name:'vote',
   initialState:{
       candidates:[]
   },
   reducers:{
         addCandidate:(state,action)=>{
             state.candidates.push({id: Date.now(), name: action.payload, votes: 0})
         },
         vote:(state,action)=>{
             const cand = state.candidates.find(c => c.id === action.payload);
              if (cand) cand.votes++;
         },
         resetVotes:(state)=>{
             state.candidates.forEach(c => c.votes = 0);
         },
        deleteCandidate:(state,action)=>{
            state.candidates = state.candidates.filter(c => c.id !== action.payload);
        }



   }

   

});

export const { addCandidate, vote, resetVotes, deleteCandidate } = Candidateur.actions;
export default Candidateur.reducer;