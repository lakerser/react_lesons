import DialogReducer from "./dialogReducer";
import ProfileReducer from "./profileReducer";
import SidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        Dialogs: {
            newMessage: '',
            MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
            MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'},
                {name: 'Viktor', id: '4'}, {name: 'Ivan', id: '5'}]
        },
        Profile: {
            newPostText: '',
            posts: [
                {text: "hello how r u?", likes: "2"},
                {text: "it's funny))", likes: "8"}
            ]
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('redux changeda')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.Profile = ProfileReducer(this._state.Profile, action)
        this._state.Dialogs = DialogReducer(this._state.Dialogs, action)
        this._state.sideBar = SidebarReducer(this._state.sideBar, action)

       this._callSubscriber(this._state)

    }

}




export default store;



