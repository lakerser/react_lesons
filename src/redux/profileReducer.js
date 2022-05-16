import React from 'react';
import {ProfileAPI} from "../api/api";

let initialState = {
    newPostText: '',
    posts: [
        {text: "hello how r u?", likes: "2"},
        {text: "it's funny))", likes: "8"}
    ],
    profile: null,
    status: '',
}

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: action.text,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }


};

export const addPostActionCreator = (text) => ({type: ADD_POST, text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfileTC = (profileId) => (dispatch) => {
    if (!profileId) {
        profileId = 23439
    }
    ProfileAPI.getUserProfile(profileId)
        .then(data => {
            dispatch(setUserProfile(data))
        })


}
export const getStatusTC = (profileId) => (dispatch) => {
    ProfileAPI.getStatus(profileId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatusTC = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))

            }
        })
}
export default ProfileReducer;