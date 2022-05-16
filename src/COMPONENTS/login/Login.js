import React from 'react';
import {Input} from "../common/formControls/formControls";
import {requiredField} from "../../utils/validation/validators";

import {Field, reduxForm} from "redux-form";

const Login = (props) => {
   const onSubmit = (formData)=>{
       console.log(formData)
   }
    return (
        <div>
            <a target='_blank' href="https://social-network.samuraijs.com/login"> Login</a>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} placeholder='Login' name={'login'} type="text" component={Input}/>
            </div>
            <div>
                <Field validate={[requiredField]} placeholder='Password' name={'password'} type="password" component={Input}/>
            </div>
            <div>
                <Field  type="checkbox" name={'rememberMe'} component={Input}/>
                <span>remember me</span>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};


const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


export default Login;