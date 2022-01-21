const updatenewmessagetext = 'UPDATE-NEW-MESSAGE-TEXT';
const sendMessage = 'SEND-NEW-MESSAGE'

const dialogReduser = (state, action) => {

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


    // if (action.type === updatenewmessagetext) {
    //     state.NewMessageText = action.body;  /*we push text from text area in profile.js and send it in our data of newPostText*/
    // } else if (action.type === sendMessage) {
    //     let body = state.NewMessageText
    //     state.NewMessageText = ''
    //     state.MyMessages.push({id: 6, message: body})
    // }
    // return state


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