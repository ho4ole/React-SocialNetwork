import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../../components/common/FormsControls/FormsControl.module.css"


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (handleSubmit, error) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field  component={Input} name={"rememberMe"}  type={"checkbox"}/> remember me
            </div>
            { error && <div className={styles.formSummaryError}>

            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    </div>
}



const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)