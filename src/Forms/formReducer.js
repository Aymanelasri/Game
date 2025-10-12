
export const FORM_REDUCER_DEFAULT_VALUES = {
  name: '',
  date: '',
  select: '',
  check: false
};
export const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case 'SELECT_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case 'CHECK_CHANGE':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state;
    }
};