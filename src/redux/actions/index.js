import { SET_CURRENT_TAB, SET_PLAYBACK_SPEED, SET_CROPPER_ASPECT_RATIO, SET_CROPPER_ACTIVE, SET_VIDEO_PLAYING, SET_VIDEO_LENGTH, SET_CURRENT_TIME, SET_VOLUME, SET_CROPPER_POSITION, SET_CROPPER_SIZE, SET_CURRENT_TIME_SEEKBAR, SYNC_CROPPER, ADD_CUT, REMOVE_CUT, SET_CURRENT_CUT } from '../actionTypes';

export const setCurrentTab = (tab) => ({
    type: SET_CURRENT_TAB,
    payload: tab,
});

export const setPlaybackSpeed = (speed) => ({
    type: SET_PLAYBACK_SPEED,
    payload: speed,
});

export const setCropperAspectRatio = (aspectRatio) => ({
    type: SET_CROPPER_ASPECT_RATIO,
    payload: aspectRatio,
});

export const setCropperActive = (isActive) => ({
    type: SET_CROPPER_ACTIVE,
    payload: isActive,
});

export const setVideoPlaying = (isPlaying) => ({
    type: SET_VIDEO_PLAYING,
    payload: isPlaying,
});

export const setVideoLength = (length) => ({
    type: SET_VIDEO_LENGTH,
    payload: length,
});

export const setCurrentTime = (time) => ({
    type: SET_CURRENT_TIME,
    payload: time,
});

export const setCurrentTimeSeekbar = (time) => ({
    type: SET_CURRENT_TIME_SEEKBAR,
    payload: time,
});

export const setVolume = (volume) => ({
    type: SET_VOLUME,
    payload: volume,
});

export const setCropperPosition = (position) => ({
    type: SET_CROPPER_POSITION,
    payload: position,
});

export const setCropperSize = (size) => ({
    type: SET_CROPPER_SIZE,
    payload: size,
});

export const addCut = (cut) => ({
    type: ADD_CUT,
    payload: cut,
});

export const removeCut = (cut) => ({
    type: REMOVE_CUT,
    payload: cut,
});

export const syncCropper = (cropperInfo) => ({
    type: SYNC_CROPPER,
    payload: cropperInfo,
});

export const setCurrentCut = (cut) => ({
    type: SET_CURRENT_CUT,
    payload: cut,
});
