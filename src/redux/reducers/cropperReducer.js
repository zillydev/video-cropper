import { SET_CROPPER_POSITION, SET_CROPPER_SIZE, SET_CROPPER_ASPECT_RATIO, SYNC_CROPPER } from '../actionTypes';

const initialState = {
    aspectRatio: { text: '9:16', value: { w: 9, h: 16 } },
    cropperPosition: { x: 0, y: 0 },
    cropperSize: { width: 100, height: 307 },
    syncCropper: { cropperPosition: { x: 0, y: 0 }, cropperSize: { width: 100, height: 100 } }
};

const cropperReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CROPPER_POSITION:
            return { ...state, cropperPosition: action.payload };
        case SET_CROPPER_SIZE:
            return { ...state, cropperSize: action.payload };
        case SET_CROPPER_ASPECT_RATIO:
            return { ...state, aspectRatio: action.payload };
        case SYNC_CROPPER:
            return { ...state, syncCropper: action.payload };
        default:
            return state;
    }
};

export default cropperReducer;
