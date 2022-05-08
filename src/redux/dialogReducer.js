const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    newMessage: '',
    MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
    MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'},
        {name: 'Viktor', id: '4'}, {name: 'Ivan', id: '5'}]
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE: {
            let newMessageText = action.text
            return {
                ...state,
                MyMessages: [...state.MyMessages, {id: Date.now(), message: newMessageText}]
            }
        }
        default:
            return state

    }

};


export const addMessage = (text) =>
    ({type: ADD_MESSAGE, text: text})


export default DialogReducer;