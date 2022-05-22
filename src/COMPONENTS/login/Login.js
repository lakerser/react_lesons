import React from 'react';
import {Input} from "../common/formControls/formControls";
import {requiredField} from "../../utils/validation/validators";

import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logination} from "../../redux/auth-reduser";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logination(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <>
        {!props.isAuthed?
            <div>
                <a target='_blank' href="https://social-network.samuraijs.com/login"> Login</a>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
            :
                <Navigate to='/Profile'/>
            }


        </>

    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} placeholder='Login' name={'email'} type="text" component={Input}/>
            </div>
            <div>
                <Field validate={[requiredField]} placeholder='Password' name={'password'} type="password"
                       component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/>
                <span>remember me</span>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};


const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuthed: state.auth.isAuthed
    }
}
export default connect(mapStateToProps, {logination})(Login);