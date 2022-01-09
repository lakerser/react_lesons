import {rerenderEntireTree} from "../render";


let state = {
    Dialogs: {
        MyMessages: [{message: 'Hi fuckkckckc'}, {message: 'one'}, {message: 'yoo'}],
        MyDialogs: [{name: 'Volodimir', id: '1'}, {name: 'Andrey', id: '2'}, {name: 'Svea', id: '3'}, {
            name: 'Viktor',
            id: '4'
        }, {name: 'Ivan', id: '5'}]
    },
    Profile: {
        posts: [
            {text: "hello how r u?", likes: "2"},
            {text: "it's funny))", likes: "8"}
        ]
    }

};
export let addPost = (PostMessage) => {
    let newPost = {
        id: 5,
        text: PostMessage,
        likes: 0
    };
    state.Profile.posts.push(newPost);
    rerenderEntireTree(state)
}
export default state;
