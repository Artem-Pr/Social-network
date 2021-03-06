import React from 'react';
import s from './Dialogs.module.css';       
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(({id, name}) => <DialogItem name={name} id={id} />); //destructuring
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={s.inputMessage}>
                        <textarea   placeholder="Enter your message"
                                    onChange={onNewMessageChange}
                                    value={newMessageBody} />
                    </div>
                    <div className={s.messageButton}>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;