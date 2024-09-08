import React, { useState } from 'react';
import './ConversationSearch.scss';
import DateTimePicker from 'react-datetime-picker';

const ConversationSearch = ({ conversations }) => {
    const [dateTime, setDateTime] = useState(new Date());

    return (
        <>
            <div id="search-container">
                <input type="text" placeholder="Search" />
                <input type="datetime-local" style={{ left: 0 }} />

            </div>
        </>
    );
}

export default ConversationSearch;
