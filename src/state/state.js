
let rerenderEntireTree = ()=>{
    console.log('state changeda')
}
export const subscribe=(observer) =>{
    rerenderEntireTree = observer

}
let state = {
    Dialogs: {
        newMessage:'',
        MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
        MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'}, {
            name: 'Viktor',
            id: '4'
        }, {name: 'Ivan', id: '5'}]
    },
    Profile: {
        newPostText:'',
        posts: [
            {text: "hello how r u?", likes: "2"},
            {text: "it's funny))", likes: "8"}
        ]
    }



};
export let updateNewPostText = (newText)=>{
    state.Profile.newPostText = newText;
    rerenderEntireTree(state)
}
export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.Profile.newPostText,
        likes: 0
    };
    state.Profile.posts.push(newPost);
    state.Profile.newPostText=''
    rerenderEntireTree(state)
}
export let addMessage = ()=>{
    let newMessage = {
        message: state.Dialogs.newMessage
    };
    state.Dialogs.MyMessages.push(newMessage)
    state.Dialogs.newMessage =''
    rerenderEntireTree(state)

}
export let onChangeMessage =(text)=>{
    state.Dialogs.newMessage=text
    rerenderEntireTree(state)
}
export default state;



