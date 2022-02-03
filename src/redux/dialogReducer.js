const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const DialogReducer = (state, action) => {
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