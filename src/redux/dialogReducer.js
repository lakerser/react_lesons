const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    newMessage: '',
    MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
    MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'},
        {name: 'Viktor', id: '4'}, {name: 'Ivan', id: '5'}]
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.messageText
            return state
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessage
            };
            state.MyMessages.push(newMessage)
            state.newMessage = ''
            return state
        default:
            return state
    }

};

export const onChangeTextMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})


export default DialogReducer;