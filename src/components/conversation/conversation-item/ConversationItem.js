import React from 'react';
import classNames from 'classnames';

import './ConversationItem.scss';



function formatDateTime(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} secs ago`;
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} mins ago`;
    } else if (diffInHours < 24) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    } else if (diffInDays < 7) {
        return `${diffInDays} days ago`;
    } else if (diffInWeeks < 4) {
        return `${diffInWeeks} weeks ago`;
    } else {
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
}

const ConversationItem = ({ conversation, isActive, onConversationItemSelected  , index}) => {
    const className = classNames('conversation', {
        'active': isActive
    });

    return (
        <div className={className} onClick={() => onConversationItemSelected(conversation.id)}>
            <img src={conversation.profileImage} alt={conversation.profileAlt} />
            <div className="title-text">{conversation.groupName}</div>
            {/* <div className="created-date">{conversation.created_at}</div> */}
            <div className="created-date">{formatDateTime(conversation.created_at)}</div>
            <div className="conversation-message">
                {conversation.chat_messages[conversation.chat_messages.length - 1].message_content}
            </div>
        </div>
    );
}

export default ConversationItem;