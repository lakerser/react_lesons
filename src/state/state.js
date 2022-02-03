const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
let store = {
    _state: {
        Dialogs: {
            newMessage: '',
            MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
            MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'}, {
                name: 'Viktor',
                id: '4'
            }, {name: 'Ivan', id: '5'}]
        },
        Profile: {
            newPostText: '',
            posts: [
                {text: "hello how r u?", likes: "2"},
                {text: "it's funny))", likes: "8"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changeda')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        debugger
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.Profile.newPostText,
                likes: 0
            };
            this._state.Profile.posts.push(newPost);
            this._state.Profile.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.Profile.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.Dialogs.newMessage = action.messageText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            debugger
            let newMessage = {
                message: this._state.Dialogs.newMessage
            };
            this._state.Dialogs.MyMessages.push(newMessage)
            this._state.Dialogs.newMessage = ''
            this._callSubscriber(this._state)
        }

    }

}

export const addPostActionCreator = () =>
    ({type: ADD_POST})

export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const onChangeTextMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT , messageText:text})

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})

export default store;



