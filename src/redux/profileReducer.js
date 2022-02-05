import React from 'react';

let initialState =  {
    newPostText: '',
    posts: [
        {text: "hello how r u?", likes: "2"},
        {text: "it's funny))", likes: "8"}
    ]
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }



};

export const addPostActionCreator = () =>
    ({type: ADD_POST})

export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default ProfileReducer;