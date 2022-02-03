


let store = {
    _state : {
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
    getState(){
      return this._state
    },
    callSubscriber(){
        console.log('state changeda')
    },
    addPost(){
        let newPost = {
            id: 5,
            text:this._state.Profile.newPostText,
            likes: 0
        };
       this._state.Profile.posts.push(newPost);
       this._state.Profile.newPostText=''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText){
       this._state.Profile.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addMessage (){
        let newMessage = {
            message:this._state.Dialogs.newMessage
        };
       this._state.Dialogs.MyMessages.push(newMessage)
       this._state.Dialogs.newMessage =''
        this._callSubscriber(this._state)

    },
    subscribe(observer) {
        this._callSubscriber = observer

    },
    onChangeMessage (text){
       this._state.Dialogs.newMessage=text
        this._callSubscriber(this._state)
    }

}



export default store;



