import dialogClasses from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return <div className={dialogClasses.message}>
        {props.context}
    </div>
}

export default Message;