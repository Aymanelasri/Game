export const FORM_REDUCER_DEFAULT_VALUES = {
        name:"",
        city:"",
        Date:"",
        country:"MA",
        accept:false
}


export const FormReducer = (state , action) => {
    
    const {name , value , checked , selectedIndex} = action.payload
    switch(action.type){

        case "INPUT_CHANGE":
            return { ... state , [name] : value}
            
        case "SELECT_CHANGE" :
            return { ... state , [name] : selectedIndex}
            
        case "CHECKBOX_CHANGE":
            return { ... state , [name] : checked}

            
        default:
            return state
    }
}