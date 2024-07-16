import { SET_PLAYBACK_SPEED, SET_VIDEO_PLAYING, SET_VIDEO_LENGTH, SET_CURRENT_TIME, SET_VOLUME, SET_CURRENT_TIME_SEEKBAR } from '../actionTypes';

const initialState = {
    playbackSpeed: { text: '1x', value: 1 },
    isVideoPlaying: false,
    videoLength: 0,
    currentTime: 0,
    currentTimeSeekbar: 0,
    volume: 1,
};

const videoControlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYBACK_SPEED:
            return { ...state, playbackSpeed: action.payload };
        case SET_VIDEO_PLAYING:
            return { ...state, isVideoPlaying: action.payload };
        case SET_VIDEO_LENGTH:
            return { ...state, videoLength: action.payload };
        case SET_CURRENT_TIME:
            return { ...state, currentTime: action.payload };
        case SET_CURRENT_TIME_SEEKBAR:
            return { ...state, currentTimeSeekbar: action.payload };
        case SET_VOLUME:
            return { ...state, volume: action.payload };
        default:
            return state;
    }
};

export default videoControlsReducer;
