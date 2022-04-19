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
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.messageText
            }
        }
        case ADD_MESSAGE: {
            let newMessageText = state.newMessage
            return {
                ...state,
                newMessage:'',
                MyMessages: [...state.MyMessages, {id:Date.now(),  message: newMessageText}]
            }
        }
        default:
            return state

    }

};

export const onChangeTextMessage = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})

export const addMessage = () =>
    ({type: ADD_MESSAGE})


export default DialogReducer;