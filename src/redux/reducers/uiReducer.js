import { SET_CURRENT_TAB, SET_CROPPER_ACTIVE, ADD_CUT, REMOVE_CUT, SET_CURRENT_CUT, SET_CURRENT_SEGMENT, ADD_SEGMENT, REMOVE_SEGMENT } from '../actionTypes';

const initialState = {
    currentTab: 'preview',
    isCropperActive: false,
    cuts: [],
    currentCut: null,
    segments: [],
    currentSegment: { start: 0, end: 0 },
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
        case ADD_SEGMENT:
            return { ...state, segments: [...state.segments, action.payload] };
        case REMOVE_SEGMENT:
            return { ...state, segments: state.segments.filter((segment) => segment !== action.payload) };
        case SET_CURRENT_SEGMENT:
            return { ...state, currentSegment: action.payload };
        default:
            return state;
    }
};

export default uiReducer;
