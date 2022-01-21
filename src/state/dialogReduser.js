const updatenewmessagetext = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-NEW-MESSAGE'
let initialState = {
    MyMessages: [{message: 'Hi '},
        {message: 'one'},
        {message: 'yoo'}],
    NewMessageText: '',
    MyDialogs: [{name: 'Volodimir', id: '1'},
        {name: 'Andrey', id: '2'},
        {name: 'Svea', id: '3'},
        {name: 'Viktor', id: '4'},
        {name: 'Ivan', id: '5'}]
}
const dialogReduser = (state = initialState, action) => {

    switch (action.type) {
        case updatenewmessagetext :
            state.NewMessageText = action.body;  /*we push text from text area in profile.js and send it in our data of newPostText*/
            return state
        case sendMessage :
            let body = state.NewMessageText
            state.NewMessageText = ''
            state.MyMessages.push({id: 6, message: body})
            return state
        default :
            return state
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
export default dialogReduser