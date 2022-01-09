
import {maxLengthCreator, required} from "../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

export const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]} placeholder={"New message"} name={"message"} component={Textarea}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const DialogsReduxForm = reduxForm({
    form: 'message'
})(DialogsForm)