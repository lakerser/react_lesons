import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuth, setAuthUserData} from "../../redux/auth-reduser";


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



export default connect(mapStateToProps,{setAuthUserData,getAuth})(HeaderContainer)