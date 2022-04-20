import React from 'react';
import {ProfileAPI} from "../api/api";

let initialState = {
    newPostText: '',
    posts: [
        {text: "hello how r u?", likes: "2"},
        {text: "it's funny))", likes: "8"}
    ],
    profile:null
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }


};

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})

export const getProfileTC = (props) => (dispatch) =>{
    let profileId = props.router.params.userId;
    ProfileAPI.setUserProfile(profileId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export default ProfileReducer;