const ADD_POST = 'ADD-POST';
const updatenewposttext = 'UPDATE-NEW-POST-TEXT';
const updatenewmessagetext = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-NEW-MESSAGE'

let store = {

    _state: {
        Dialogs: {
            MyMessages: [{message: 'Hi '},
                {message: 'one'},
                {message: 'yoo'}],
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
    rerenderEntireTree() {
        console.log('state was chanjed')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback
    },


    // addMessage() {
    //     let newMessage = {
    //         message: this._state.Dialogs.NewMessageText,
    //
    //     };
    //     this._state.Dialogs.MyMessages.push(newMessage)
    //     this._state.Dialogs.NewMessageText = ''
    //     this.rerenderEntireTree(this._state)
    // },
    // changeNewMessageT(newM) {
    //     this._state.Dialogs.NewMessageText = newM;  /*we push text from text area in profile.js and send it in our data of newPostText*/
    //     this.rerenderEntireTree(this._state)  /*reset ui*/
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.Profile.newPostText,
                likes: 0
            };
            this._state.Profile.posts.push(newPost);  /*we push text from text area in profile.js and send it in our data of posts*/
            this._state.Profile.newPostText = ''
            this.rerenderEntireTree(this._state)  /*reset ui*/
        } else if (action.type === updatenewposttext) {
            this._state.Profile.newPostText = action.newText;
        }  /*we push text from text area in profile.js and send it in our data of newPostText*/
        else if (action.type === updatenewmessagetext) {
            this._state.Dialogs.NewMessageText = action.body;  /*we push text from text area in profile.js and send it in our data of newPostText*/
            this.rerenderEntireTree(this._state)  /*reset ui*/
        } else if (action.type === sendMessage) {
            let body = this._state.Dialogs.NewMessageText
            this._state.Dialogs.NewMessageText = ''
            this._state.Dialogs.MyMessages.push({id: 6, message: body})
            this.rerenderEntireTree(this._state)


            // this._state.Dialogs.NewMessageText = action.body;  /*we push text from text area in profile.js and send it in our data of newPostText*/
            // this.rerenderEntireTree(this._state)  /*reset ui*/
            // let newMessage = {
            //     message: this._state.Dialogs.NewMessageText,
            //
            // };
            // this._state.Dialogs.MyMessages.push(newMessage)
            // this._state.Dialogs.NewMessageText = ''
            // this.rerenderEntireTree(this._state)
        }
        this.rerenderEntireTree(this._state)  /*reset ui*/

    }


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
export let sendNewMessageActionCreator = () => {
    return {
        type: sendMessage
    }
}
export let updateNewMessageActionCreator = (body) => {
    return {
        type: updatenewmessagetext,
        body: body
    }
}


export default store;
window.store = store;