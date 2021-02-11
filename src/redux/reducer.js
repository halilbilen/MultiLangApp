import {
    LANGUAGE,
} from './actions';


const INITIAL_STATE = {
    language:"",
}
export default function LanguageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LANGUAGE:
            return { ...state, language: action.payload }
        default:
            return state;
    }
}