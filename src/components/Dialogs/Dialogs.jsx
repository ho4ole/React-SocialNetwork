import dialogClasses from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Kevin'}
    ]

    let messagesData = [
        {id: 1, context: 'Hi'},
        {id: 2, context: 'Hey'},
        {id: 3, context: 'Hi'}
    ]

    let dialogsElements = dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )

    let messagesElements = messagesData.map(
        message => <Message context={message.context}/>
    )



    return <div className={dialogClasses.dialogs}>
        <div className={dialogClasses.dialogItems}>
            {dialogsElements}
        </div>
        <div className={dialogClasses.messages}>
            Messages
            {messagesElements}
        </div>
    </div>

}

export default Dialogs;