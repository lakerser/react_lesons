const ADD_POST = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);  /*we push text from text area in profile.js and send it in our data of posts*/
            state.newPostText = ''
            return state
        case updatenewposttext :
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         text: state.newPostText,
    //         likes: 0
    //     };
    //     state.posts.push(newPost);  /*we push text from text area in profile.js and send it in our data of posts*/
    //     state.newPostText = ''
    // } else if (action.type === updatenewposttext) {
    //     state.newPostText = action.newText;
    // }  /*we push text from text area in profile.js and send it in our data of newPostText*/
    //

    return state


}

export let postActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (text) => {
    return {
        type: updatenewposttext,
        newText: text

    }

}
export default profileReduser