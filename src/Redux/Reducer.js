export const Reducer = (state={ Etudiants:[], Produits:[] ,Todos:[], Livres:[]},action)=>{
    switch (action.type) {
        case "ADD_ETUDIANT":
            return {...state, Etudiants: [...state.Etudiants, {...action.payload, id: Date.now()}]};
        case "UPDATE_ETUDIANT":
            return {...state, Etudiants: state.Etudiants.map(etudiant =>
                etudiant.id === action.payload.id ? action.payload.newEtudiant : etudiant
            )};
        case "DELETE_ETUDIANT":
            return {...state, Etudiants: state.Etudiants.filter(etudiant => etudiant.id !== action.payload.id)};
        case "ADD_PRODUIT":
            return {...state, Produits: [...state.Produits, {...action.payload, id: Date.now()}]};
        case "UPDATE_PRODUIT":
            return {...state, Produits: state.Produits.map(produit =>
                produit.id === action.payload.id ? action.payload.newProduit : produit
            )};
        case "DELETE_PRODUIT":
            return {...state, Produits: state.Produits.filter(produit => produit.id !== action.payload.id)};
        case  "ADD_TODO":
            return {...state , Todos: [...state.Todos, {...action.payload ,id:Date.now()}]}
        case "UPDATE_TODO":
            return {...state,Todos:state.Todos.map(todo=>
                todo.id===action.payload.id ? action.payload.newTodo : todo
            )}
        case  "DELETE_TODO":
            return{ ...state,Todos :state.Todos.filter(todo=>todo.id !==action.payload.id)}
        case "ADD_LIVRE":
            return {...state, Livres: [...state.Livres, {...action.payload, id: Date.now()}]};
        case "UPDATE_LIVRE":
            return {...state, Livres: state.Livres.map(livre =>
                livre.id === action.payload.id ? action.payload.newLivre : livre
            )};
        case "DELETE_LIVRE":
            return {...state, Livres: state.Livres.filter(livre => livre.id !== action.payload.id)};
        default:
            return state;
    }
};

    



