import React from 'react';

import ConversationItem from '../conversation-item/ConversationItem';
import './ConversationList.scss';

const ConversationList = ({ conversations, selectedConversation, onConversationItemSelected }) => {
    console.log('conversations ==', conversations)
    const conversationItems = conversations.map((conversation, index) => {
        const conversationIsActive = selectedConversation && conversation.id === selectedConversation.id;

        console.log('conversationIsActive ==', conversationIsActive)

        return <ConversationItem
            key={conversation.id}
            onConversationItemSelected={onConversationItemSelected}
            isActive={conversationIsActive}
            conversation={conversation}
            index={index} />;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default ConversationList;