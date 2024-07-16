import { SET_CURRENT_TAB, SET_CROPPER_ACTIVE, ADD_CUT, REMOVE_CUT, SET_CURRENT_CUT } from '../actionTypes';

const initialState = {
    currentTab: 'preview',
    isCropperActive: false,
    cuts: [],
    currentCut: null,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            return { ...state, currentTab: action.payload };
        case SET_CROPPER_ACTIVE:
            return { ...state, isCropperActive: action.payload };
        case ADD_CUT:
            return { ...state, cuts: [...state.cuts, action.payload] };
        case REMOVE_CUT:
            return { ...state, cuts: state.cuts.filter((cut) => cut !== action.payload) };
        case SET_CURRENT_CUT:
            return { ...state, currentCut: action.payload };
        default:
            return state;
    }
};

export default uiReducer;
