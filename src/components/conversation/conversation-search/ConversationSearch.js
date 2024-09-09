import React, { useEffect, useState } from 'react';
import './ConversationSearch.scss';

const ConversationSearch = ({ conversations }) => {
    const [dateTime, setDateTime] = useState(new Date());
    
    // "Show the dialog" button opens the dialog modally
    
    // useEffect(()=>{
    //     const dialog = document.querySelector("dialog");
    //     const showButton = document.querySelector("dialog + button");
    //     const closeButton = document.querySelector("dialog + button");
    //     showButton.addEventListener("click", () => {
    //       dialog.showModal();
    //     });
        
    //     closeButton.addEventListener("blur", () => {
    //       dialog.close();
    //     });

    // },[])
    return (
        <>
            <div id="search-container">
                <input type="text" placeholder="Search" style={{paddingTop: 0 }}/>
                <input type="datetime-local"  style={{backgroundImage: "none"}} />
                {/* <dialog  style={{right: "0px",left: 0, bottom: 0}}>
                </dialog>
                <button>Filter</button> */}
            </div>

        </>
    );
}

export default ConversationSearch;
