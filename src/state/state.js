let rerenderEntireTree = () => {
    console.log('state was chanjed')
}


let state = {
    Dialogs: {
        MyMessages: [{message: 'Hi '}, {message: 'one'}, {message: 'yoo'}],
        NewMessageText: '',
        MyDialogs: [{name: 'Volodimir', id: '1'},
            {name: 'Andrey', id: '2'},
            {name: 'Svea', id: '3'},
            {name: 'Viktor', id: '4'},
            {name: 'Ivan', id: '5'}]
    },
    Profile: {
        posts: [
            {text: "hello how r u?", likes: "2"},
            {text: "it's funny))", likes: "8"}
        ],
        newPostText: ''
    }

};

export let addMessage = () => {
    let newMessage = {
        message: state.Dialogs.NewMessageText,

    };
    state.Dialogs.MyMessages.push(newMessage)
    state.Dialogs.NewMessageText = ''
    rerenderEntireTree(state)
}
export let changeNewMessageT = (newM) => {
    state.Dialogs.NewMessageText = newM;  /*we push text from text area in profile.js and send it in our data of newPostText*/
    rerenderEntireTree(state)  /*reset ui*/
}


export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.Profile.newPostText,
        likes: 0
    };
    state.Profile.posts.push(newPost);  /*we push text from text area in profile.js and send it in our data of posts*/
    state.Profile.newPostText = ''
    rerenderEntireTree(state)  /*reset ui*/
}

export let changeNewPostT = (newText) => {
    state.Profile.newPostText = newText;  /*we push text from text area in profile.js and send it in our data of newPostText*/
    rerenderEntireTree(state)  /*reset ui*/
}

export const subscribe = (callback) => {
    rerenderEntireTree = callback
}

export default state;
