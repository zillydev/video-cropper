import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import cropperReducer from './cropperReducer';
import videoControlsReducer from './videoControlsReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    videoControls: videoControlsReducer,
    cropper: cropperReducer,
});

export default rootReducer;
