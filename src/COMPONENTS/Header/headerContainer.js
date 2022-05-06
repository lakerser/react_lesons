import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reduser";
import {compose} from "redux";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
    }



    render() {
        return (

            <Header {...this.props}/>

        );
    }
}
const mapStateToProps = (state)=>({
    isAuthed : state.auth.isAuthed,
    login : state.auth.login
})

export default compose(
    connect(mapStateToProps,{getAuth}),

)(HeaderContainer)

