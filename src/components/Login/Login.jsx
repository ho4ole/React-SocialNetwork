import {Field, reduxForm} from "redux-form";

const Login = () => {

    const onSubmit = (formData) => {

    }

    return <div>
        <h1>Log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field  component={"input"} name={"rememberMe"}  type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

export default Login