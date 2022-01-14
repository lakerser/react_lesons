let store = {

    _state: {
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

    },

    getState(){
      return this._state
    },
    rerenderEntireTree() {
        console.log('state was chanjed')
    },
    addPost() {
        let newPost = {
            id: 5,
            text: this._state.Profile.newPostText,
            likes: 0
        };
        this._state.Profile.posts.push(newPost);  /*we push text from text area in profile.js and send it in our data of posts*/
        this._state.Profile.newPostText = ''
        this.rerenderEntireTree(this._state)  /*reset ui*/
    },
    changeNewPostT(newText) {
        this._state.Profile.newPostText = newText;  /*we push text from text area in profile.js and send it in our data of newPostText*/
        this.rerenderEntireTree(this._state)  /*reset ui*/
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback
    },
    addMessage() {
        let newMessage = {
            message: this._state.Dialogs.NewMessageText,

        };
        this._state.Dialogs.MyMessages.push(newMessage)
        this._state.Dialogs.NewMessageText = ''
        this.rerenderEntireTree(this._state)
    },
    changeNewMessageT(newM) {
        this._state.Dialogs.NewMessageText = newM;  /*we push text from text area in profile.js and send it in our data of newPostText*/
        this.rerenderEntireTree(this._state)  /*reset ui*/
    }
    
}




export default store;
