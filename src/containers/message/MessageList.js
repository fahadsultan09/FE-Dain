import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesRequested } from '../../store/actions';
import Message from '../../components/message/Message';
import './MessageList.scss';

const MessageList = ({ conversationId, messages }) => {
    // const messageDetails = getMessagesForConversation(conversationId);
    // const messages = messageDetails ? messageDetails.messages: null;
    let messageItems = null;

    // useEffect(() => {
    //     if (!messageDetails) {
    //         loadMessages(conversationId, null);
    //     }
    // }, [messageDetails, loadMessages, conversationId])

    if (messages && messages.length > 0) {
        messageItems = messages.map((message, index) => {
            return <Message
                key={index}
                isMyMessage={index === 0}
                message={message}
                index={index} />;
        });
    }

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}

const mapStateToProps = state => {
    const getMessagesForConversation = conversationId => {
        return state.messagesState.messageDetails[conversationId];
    }

    return {
        getMessagesForConversation
    }
}

const mapDispatchToProps = dispatch => {
    const loadMessages = (conversationId, lastMessageId) => {
        dispatch(messagesRequested(conversationId, 5, lastMessageId));
    }

    return { loadMessages };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);