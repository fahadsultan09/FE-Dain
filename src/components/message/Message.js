import React from 'react';
import classNames from 'classnames';

import './Message.scss';

const Message = ({ isMyMessage, message, index }) => {

    const messageClass = classNames('message-row', { 'you-message': isMyMessage, 'other-message': !isMyMessage });

    const imageThumbnail = isMyMessage ? null : <img src={profileImages[index].imageUrl} alt={profileImages[index].imageAlt} />;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {message.message_content}
                </div>
                {/* <div className="message-time">{message.created_at}</div> */}
                <div className="message-time">{formatDateTimeTo12Hour(message.created_at)}</div>
            </div>
        </div>
    );
}

export default Message;



function formatDateTimeTo12Hour(dateTimeString) {
    // Create a Date object from the input datetime string
    const date = new Date(dateTimeString);

    // Extract hours, minutes, and seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Return formatted time string
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}


export const profileImages = [
    {
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        imageAlt: "Male Profile 1"
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        imageAlt: "Female Profile 1"
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/men/65.jpg",
        imageAlt: "Male Profile 2"
    },
    {
        imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
        imageAlt: "Female Profile 2"
    },
    {
        imageUrl: "https://i.pravatar.cc/150?img=3",
        imageAlt: "Random Avatar 1"
    },
    {
        imageUrl: "https://i.pravatar.cc/150?img=5",
        imageAlt: "Random Avatar 2"
    },
    {
        imageUrl: "https://i.pravatar.cc/150?img=10",
        imageAlt: "Random Avatar 3"
    },
    {
        imageUrl: "https://i.pravatar.cc/150?img=15",
        imageAlt: "Random Avatar 4"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        imageAlt: "Artistic Face Close-Up"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        imageAlt: "Abstract Silhouette"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        imageAlt: "Casual Woman Portrait"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        imageAlt: "Male Portrait with Glasses"
    }
];
