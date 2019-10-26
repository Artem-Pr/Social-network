import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    };

    return (
        <Dialogs    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />
    )
}

export default DialogsContainer;