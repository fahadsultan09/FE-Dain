import { call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
import { messagesLoaded } from '../actions';

const API_ENDPOINT = 'https://dev.brainbackend.dainstudios.com/challenge/chat_sessions';



export const fetchChatSessions = async (startDate, endDate) => {
    let url = `https://dev.brain-backend.dainstudios.com/challenge/chat_sessions/`;

    if (startDate && endDate) {
        url += `?start_date=${startDate}&end_date=${endDate}`;
    }

    try {
        const response = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching chat sessions:", error);
        throw error;
    }
};


const delay = (ms) => new Promise(res => setTimeout(res, ms));

const conversations = [
    {
        id: '1',
        imageUrl: require('../../images/profiles/daryl.png'),
        imageAlt: 'Daryl Duckmanton',
        title: 'Daryl Duckmanton',
        createdAt: 'Apr 16',
        latestMessageText: 'This is a message',
        messages: [
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Ok then',
                createdAt: 'Apr 16',
                isMyMessage: true
            },
            {
                imageUrl: require('../../images/profiles/daryl.png'),
                imageAlt: 'Daryl Duckmanton',
                messageText: `
                    Yeah I think it's best we do that. Otherwise things won't work well at all. 
                    I'm adding more text here to test the sizing of the speech bubble and the 
                    wrapping of it too.
                `,
                createdAt: 'Apr 16',
                isMyMessage: false
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Maybe we can use Jim\'s studio.',
                createdAt: 'Apr 15',
                isMyMessage: true
            },
            {
                imageUrl: require('../../images/profiles/daryl.png'),
                imageAlt: 'Daryl Duckmanton',
                messageText: `
                    All I know is where I live it's too hard
                    to record because of all the street noise.
                `,
                createdAt: 'Apr 15',
                isMyMessage: false
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: `
                    Well we need to work out sometime soon where
                    we really want to record our video course.
                `,
                createdAt: 'Apr 15',
                isMyMessage: true
            },
            {
                imageUrl: require('../../images/profiles/daryl.png'),
                imageAlt: 'Daryl Duckmanton',
                messageText: `
                    I'm just in the process of finishing off the
                    last pieces of material for the course.
                `,
                createdAt: 'Apr 15',
                isMyMessage: false
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'How\'s it going?',
                createdAt: 'Apr 13',
                isMyMessage: true
            },
            {
                imageUrl: require('../../images/profiles/daryl.png'),
                imageAlt: 'Daryl Duckmanton',
                messageText: ' Hey mate what\'s up?',
                createdAt: 'Apr 13',
                isMyMessage: false
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Hey Daryl?',
                createdAt: 'Apr 13',
                isMyMessage: true
            }
        ]
    },
    {
        id: '2',
        imageUrl: require('../../images/profiles/kim.jpeg'),
        imageAlt: 'Kim O\'Neil',
        title: 'Kim O\'Neil',
        createdAt: 'Oct 20',
        latestMessageText: 'Ok fair enough. Well good talking to you.',
        messages: []
    },
    {
        id: '3',
        imageUrl: require('../../images/profiles/john.jpeg'),
        imageAlt: 'John Anderson',
        title: 'John Anderson',
        createdAt: '1 week ago',
        latestMessageText: 'Yes I love how Python does that',
        messages: []
    },
    {
        id: '4',
        imageUrl: require('../../images/profiles/ben.png'),
        imageAlt: 'Ben Smith',
        title: 'Ben Smith',
        createdAt: '2:49 PM',
        latestMessageText: 'Yeah Miami Heat are done',
        messages: []
    },
    {
        id: '5',
        imageUrl: require('../../images/profiles/douglas.png'),
        imageAlt: 'Douglas Johannasen',
        title: 'Douglas Johannasen',
        createdAt: '6:14 PM',
        latestMessageText: 'No it does not',
        messages: []
    },
    {
        id: '6',
        imageUrl: require('../../images/profiles/jacob.png'),
        imageAlt: 'Jacob Manly',
        title: 'Jacob Manly',
        createdAt: '3 secs ago',
        latestMessageText: 'Just be very careful doing that',
        messages: []
    },
    {
        id: '7',
        imageUrl: require('../../images/profiles/stacey.jpeg'),
        imageAlt: 'Stacey Wilson',
        title: 'Stacey Wilson',
        createdAt: '30 mins ago',
        latestMessageText: 'Awesome!!! Congratulations!!!!',
        messages: []
    },
    {
        id: '8',
        imageUrl: require('../../images/profiles/stan.jpeg'),
        imageAlt: 'Stan George',
        title: 'Stan George',
        createdAt: '1 week ago',
        latestMessageText: 'Good job',
        messages: []
    },
    {
        id: '9',
        imageUrl: require('../../images/profiles/sarah.jpeg'),
        imageAlt: 'Sarah Momes',
        title: 'Sarah Momes',
        createdAt: '1 year ago',
        latestMessageText: 'Thank you. I appreciate that.',
        messages: []
    }
];

const conversations2 = [
    {
        "id": "98da2eff-df0d-4c57-b0e1-83f0ee0c4003",
        "created_at": "2024-07-04T02:17:23",
        "updated_at": "2024-07-04T16:17:23",
        "chat_messages": [
            {
                "id": "316f6bcd-7f5e-4116-bb6d-396129843b86",
                "created_at": "2024-07-04T02:17:23",
                "updated_at": "2024-07-04T02:24:23",
                "chat_session_id": "98da2eff-df0d-4c57-b0e1-83f0ee0c4003",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "d8359261-fbca-4bce-a963-0091556054e0",
                "created_at": "2024-07-04T02:22:23",
                "updated_at": "2024-07-04T02:26:23",
                "chat_session_id": "98da2eff-df0d-4c57-b0e1-83f0ee0c4003",
                "message_content": "Sample message 2 from user",
                "role": "user"
            }
        ],
        "user_id": "1deaa54d-e256-4e96-9005-db13e7b7c97a"
    },
    {
        "id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
        "created_at": "2024-08-01T05:17:44",
        "updated_at": "2024-08-03T05:17:44",
        "chat_messages": [
            {
                "id": "28245f44-db91-4f98-9c0d-7d8e659d4203",
                "created_at": "2024-08-01T05:17:44",
                "updated_at": "2024-08-01T05:27:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "32d57a33-2f90-427a-9320-d98dfd988d9f",
                "created_at": "2024-08-01T05:22:44",
                "updated_at": "2024-08-01T05:32:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            },
            {
                "id": "77652500-a628-4ed7-9b47-42aaa0a6e085",
                "created_at": "2024-08-01T05:27:44",
                "updated_at": "2024-08-01T05:31:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 3 from assistant",
                "role": "assistant"
            },
            {
                "id": "bc33b9cf-67e3-4f3c-ba80-c3bcc1eb5d53",
                "created_at": "2024-08-01T05:32:44",
                "updated_at": "2024-08-01T05:35:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 4 from assistant",
                "role": "assistant"
            },
            {
                "id": "2a583b89-592a-49a2-9227-de9b66d5fc82",
                "created_at": "2024-08-01T05:37:44",
                "updated_at": "2024-08-01T05:47:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 5 from user",
                "role": "user"
            },
            {
                "id": "f30fe9cd-3895-402f-b4dc-b19de4c9d922",
                "created_at": "2024-08-01T05:42:44",
                "updated_at": "2024-08-01T05:52:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 6 from assistant",
                "role": "assistant"
            },
            {
                "id": "85aa3d25-6a1a-4a3b-b4f6-0e8a9551d0ff",
                "created_at": "2024-08-01T05:47:44",
                "updated_at": "2024-08-01T05:55:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 7 from assistant",
                "role": "assistant"
            },
            {
                "id": "efa766fe-8224-4d20-b0fa-053c2d858766",
                "created_at": "2024-08-01T05:52:44",
                "updated_at": "2024-08-01T05:53:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 8 from assistant",
                "role": "assistant"
            },
            {
                "id": "04c3b9d3-24ca-4a65-8e60-b8bfd3c6b5df",
                "created_at": "2024-08-01T05:57:44",
                "updated_at": "2024-08-01T06:05:44",
                "chat_session_id": "3c3fbdaa-0323-47f5-9821-a18b87a52c98",
                "message_content": "Sample message 9 from user",
                "role": "user"
            }
        ],
        "user_id": "041384a4-ad7e-487f-91dc-7af81736098e"
    },
    {
        "id": "8de7fd27-477c-4168-94fd-7d03ddf9ab6f",
        "created_at": "2024-07-13T15:24:43",
        "updated_at": "2024-07-14T23:24:43",
        "chat_messages": [
            {
                "id": "84792073-a84d-4320-ac86-f4dd0f14d66c",
                "created_at": "2024-07-13T15:24:43",
                "updated_at": "2024-07-13T15:27:43",
                "chat_session_id": "8de7fd27-477c-4168-94fd-7d03ddf9ab6f",
                "message_content": "Sample message 1 from user",
                "role": "user"
            }
        ],
        "user_id": "146bc007-d861-4ddd-939a-97a9636ca7dd"
    },
    {
        "id": "7d312b45-f929-4a8c-ab6d-0e854f46ec8f",
        "created_at": "2024-06-03T14:59:38",
        "updated_at": "2024-06-04T08:59:38",
        "chat_messages": [
            {
                "id": "7b48b4fa-ba41-4e54-8fac-b6196bb9f8d4",
                "created_at": "2024-06-03T14:59:38",
                "updated_at": "2024-06-03T15:06:38",
                "chat_session_id": "7d312b45-f929-4a8c-ab6d-0e854f46ec8f",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "c74ef471-2f50-465a-abd0-19a0c0a9ce18",
                "created_at": "2024-06-03T15:04:38",
                "updated_at": "2024-06-03T15:13:38",
                "chat_session_id": "7d312b45-f929-4a8c-ab6d-0e854f46ec8f",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            },
            {
                "id": "9c83d238-622c-4e43-938b-1740711734f2",
                "created_at": "2024-06-03T15:09:38",
                "updated_at": "2024-06-03T15:18:38",
                "chat_session_id": "7d312b45-f929-4a8c-ab6d-0e854f46ec8f",
                "message_content": "Sample message 3 from assistant",
                "role": "assistant"
            },
            {
                "id": "917f8d4a-0d55-47f3-8332-ff7d7932f093",
                "created_at": "2024-06-03T15:14:38",
                "updated_at": "2024-06-03T15:15:38",
                "chat_session_id": "7d312b45-f929-4a8c-ab6d-0e854f46ec8f",
                "message_content": "Sample message 4 from assistant",
                "role": "assistant"
            }
        ],
        "user_id": "09f1e344-88a4-4cb0-ac41-36bb52325616"
    },
    {
        "id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
        "created_at": "2024-06-16T09:29:33",
        "updated_at": "2024-06-16T22:29:33",
        "chat_messages": [
            {
                "id": "07ac4e2e-3ae8-4c37-9bd1-3e6bb37f4933",
                "created_at": "2024-06-16T09:29:33",
                "updated_at": "2024-06-16T09:32:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "f81c23a8-0e3a-49cb-ae8f-171f24b05268",
                "created_at": "2024-06-16T09:34:33",
                "updated_at": "2024-06-16T09:39:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            },
            {
                "id": "f954b6d8-31a5-4c15-ab72-f181df4a1671",
                "created_at": "2024-06-16T09:39:33",
                "updated_at": "2024-06-16T09:46:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 3 from assistant",
                "role": "assistant"
            },
            {
                "id": "d4c20192-a0bd-472c-95ae-614a63b78553",
                "created_at": "2024-06-16T09:44:33",
                "updated_at": "2024-06-16T09:47:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 4 from assistant",
                "role": "assistant"
            },
            {
                "id": "33a6f023-a791-4e90-94da-2c93ce3b3050",
                "created_at": "2024-06-16T09:49:33",
                "updated_at": "2024-06-16T09:54:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 5 from user",
                "role": "user"
            },
            {
                "id": "7b0ded4d-27f9-4fed-b5cd-f5bb58f571a2",
                "created_at": "2024-06-16T09:54:33",
                "updated_at": "2024-06-16T09:59:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 6 from assistant",
                "role": "assistant"
            },
            {
                "id": "c6215482-d0d1-406b-9333-3ca5521b436d",
                "created_at": "2024-06-16T09:59:33",
                "updated_at": "2024-06-16T10:03:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 7 from user",
                "role": "user"
            },
            {
                "id": "86a0a857-6041-462e-9632-298fc178c39e",
                "created_at": "2024-06-16T10:04:33",
                "updated_at": "2024-06-16T10:05:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 8 from assistant",
                "role": "assistant"
            },
            {
                "id": "131c490e-a74b-4c25-962f-154064cebf45",
                "created_at": "2024-06-16T10:09:33",
                "updated_at": "2024-06-16T10:19:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 9 from user",
                "role": "user"
            },
            {
                "id": "64571b55-0051-419b-becc-73674742cb62",
                "created_at": "2024-06-16T10:14:33",
                "updated_at": "2024-06-16T10:22:33",
                "chat_session_id": "d7e64664-5151-4cc9-b550-34778c8f9cd2",
                "message_content": "Sample message 10 from user",
                "role": "user"
            }
        ],
        "user_id": "a581f608-b293-423e-8c6f-ad65e109b1e6"
    },
    {
        "id": "766b1345-d299-416e-9a4d-74207c2d3e98",
        "created_at": "2024-06-02T15:13:46",
        "updated_at": "2024-06-02T21:13:46",
        "chat_messages": [
            {
                "id": "bd6d6374-b8b1-43f0-917e-830eb26952b6",
                "created_at": "2024-06-02T15:13:46",
                "updated_at": "2024-06-02T15:18:46",
                "chat_session_id": "766b1345-d299-416e-9a4d-74207c2d3e98",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "e6cd94c7-6505-4e4e-87c5-293a752fe793",
                "created_at": "2024-06-02T15:18:46",
                "updated_at": "2024-06-02T15:20:46",
                "chat_session_id": "766b1345-d299-416e-9a4d-74207c2d3e98",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            }
        ],
        "user_id": "4524424b-62b4-468f-b044-6597b8881db2"
    },
    {
        "id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
        "created_at": "2024-06-25T01:41:24",
        "updated_at": "2024-06-25T14:41:24",
        "chat_messages": [
            {
                "id": "78c90c8a-162f-47f2-ac32-f43712a4d1cd",
                "created_at": "2024-06-25T01:41:24",
                "updated_at": "2024-06-25T01:50:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "8d25f67f-acb5-4c4c-8bb4-f9624b4e8985",
                "created_at": "2024-06-25T01:46:24",
                "updated_at": "2024-06-25T01:53:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            },
            {
                "id": "79079183-afa2-4f0f-af52-eec8d571310b",
                "created_at": "2024-06-25T01:51:24",
                "updated_at": "2024-06-25T01:55:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 3 from assistant",
                "role": "assistant"
            },
            {
                "id": "6b26b9da-dbed-4fc5-995a-55a8ae34bf17",
                "created_at": "2024-06-25T01:56:24",
                "updated_at": "2024-06-25T02:04:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 4 from user",
                "role": "user"
            },
            {
                "id": "9ab59f0d-6208-4d8d-9b52-6e066d9ef6d4",
                "created_at": "2024-06-25T02:01:24",
                "updated_at": "2024-06-25T02:04:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 5 from user",
                "role": "user"
            },
            {
                "id": "09ca64d9-d485-4a9d-8f75-9eaf50c91374",
                "created_at": "2024-06-25T02:06:24",
                "updated_at": "2024-06-25T02:15:24",
                "chat_session_id": "00ee440b-5f1f-4556-ba79-99b5e2766e8d",
                "message_content": "Sample message 6 from user",
                "role": "user"
            }
        ],
        "user_id": "3e49ad06-8b7d-4671-9ed1-783105af8a05"
    },
    {
        "id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
        "created_at": "2024-07-14T21:58:59",
        "updated_at": "2024-07-15T07:58:59",
        "chat_messages": [
            {
                "id": "909e12db-c320-4854-9de9-99a2e8e92438",
                "created_at": "2024-07-14T21:58:59",
                "updated_at": "2024-07-14T22:05:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "503e0b62-f6b1-49f4-90f3-fbe9da66b68a",
                "created_at": "2024-07-14T22:03:59",
                "updated_at": "2024-07-14T22:05:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 2 from user",
                "role": "user"
            },
            {
                "id": "11ef4fcf-4c72-4902-bdae-5c658f17d658",
                "created_at": "2024-07-14T22:08:59",
                "updated_at": "2024-07-14T22:13:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 3 from user",
                "role": "user"
            },
            {
                "id": "7536e916-f246-436c-ab54-368376d21690",
                "created_at": "2024-07-14T22:13:59",
                "updated_at": "2024-07-14T22:15:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 4 from assistant",
                "role": "assistant"
            },
            {
                "id": "d5af525e-08f1-4d91-b2b8-ee82cc1bb779",
                "created_at": "2024-07-14T22:18:59",
                "updated_at": "2024-07-14T22:26:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 5 from user",
                "role": "user"
            },
            {
                "id": "62502efa-e1db-41a6-8ae0-1daa15e3e08e",
                "created_at": "2024-07-14T22:23:59",
                "updated_at": "2024-07-14T22:25:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 6 from user",
                "role": "user"
            },
            {
                "id": "e081e189-9661-41dc-8956-8ca42fbba7e1",
                "created_at": "2024-07-14T22:28:59",
                "updated_at": "2024-07-14T22:30:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 7 from user",
                "role": "user"
            },
            {
                "id": "092b3a2d-6def-4d6c-982f-82afc93f36d2",
                "created_at": "2024-07-14T22:33:59",
                "updated_at": "2024-07-14T22:40:59",
                "chat_session_id": "b4f328b5-436c-4ec8-b006-9ccdd38ba430",
                "message_content": "Sample message 8 from assistant",
                "role": "assistant"
            }
        ],
        "user_id": "f1002307-7d32-4ba9-aa4e-e6647a9b963e"
    },
    {
        "id": "4502b305-63be-46e3-8526-1ad354161e47",
        "created_at": "2024-07-22T01:51:03",
        "updated_at": "2024-07-22T03:51:03",
        "chat_messages": [
            {
                "id": "83efadad-1732-4a47-80f9-45a4fe3a057a",
                "created_at": "2024-07-22T01:51:03",
                "updated_at": "2024-07-22T01:55:03",
                "chat_session_id": "4502b305-63be-46e3-8526-1ad354161e47",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "c89c91ae-1028-4c61-a859-4b7307b52b2a",
                "created_at": "2024-07-22T01:56:03",
                "updated_at": "2024-07-22T02:01:03",
                "chat_session_id": "4502b305-63be-46e3-8526-1ad354161e47",
                "message_content": "Sample message 2 from assistant",
                "role": "assistant"
            },
            {
                "id": "ac914706-1dea-4982-9943-8d61e6f2d731",
                "created_at": "2024-07-22T02:01:03",
                "updated_at": "2024-07-22T02:07:03",
                "chat_session_id": "4502b305-63be-46e3-8526-1ad354161e47",
                "message_content": "Sample message 3 from user",
                "role": "user"
            },
            {
                "id": "380a5164-1bf3-4b3c-83e9-5de5b321d470",
                "created_at": "2024-07-22T02:06:03",
                "updated_at": "2024-07-22T02:08:03",
                "chat_session_id": "4502b305-63be-46e3-8526-1ad354161e47",
                "message_content": "Sample message 4 from user",
                "role": "user"
            }
        ],
        "user_id": "8b17d608-13a8-4fb3-96ce-c56ead4de055"
    },
    {
        "id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
        "created_at": "2024-07-08T09:51:28",
        "updated_at": "2024-07-09T22:51:28",
        "chat_messages": [
            {
                "id": "a75e5deb-123c-4fb1-bb73-8d379bc2e967",
                "created_at": "2024-07-08T09:51:28",
                "updated_at": "2024-07-08T09:58:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 1 from user",
                "role": "user"
            },
            {
                "id": "0c13abf9-dc64-45de-bf81-a8a9e4f92eba",
                "created_at": "2024-07-08T09:56:28",
                "updated_at": "2024-07-08T09:59:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 2 from user",
                "role": "user"
            },
            {
                "id": "d7f89ea1-2677-46ac-9302-f47d4c2fd77f",
                "created_at": "2024-07-08T10:01:28",
                "updated_at": "2024-07-08T10:04:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 3 from user",
                "role": "user"
            },
            {
                "id": "6b38de21-b66e-434f-8170-97ab3fca90ff",
                "created_at": "2024-07-08T10:06:28",
                "updated_at": "2024-07-08T10:11:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 4 from user",
                "role": "user"
            },
            {
                "id": "335815cd-0028-4734-b76c-115c1dad16e7",
                "created_at": "2024-07-08T10:11:28",
                "updated_at": "2024-07-08T10:20:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 5 from assistant",
                "role": "assistant"
            },
            {
                "id": "6862febb-d3c7-4e79-8854-dfe8b944a257",
                "created_at": "2024-07-08T10:16:28",
                "updated_at": "2024-07-08T10:25:28",
                "chat_session_id": "04b92069-abf3-4d9b-8bcd-69aeee7878cd",
                "message_content": "Sample message 6 from assistant",
                "role": "assistant"
            }
        ],
        "user_id": "cd58de77-e8e8-4453-8e3d-319b8efe9911"
    }
]

export const groupImages = [
    {
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2201786065/display_1500/stock-photo-a-group-of-multiracial-friends-has-a-great-time-at-the-roof-nightclub-in-the-summertime-clubbing-2201786065.jpg",
        imageAlt: "Group of Friends Smiling Together"
    },
    {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/00/58/42/64/500_F_58426476_Kjrv34EXbCsbortM9b18fI6nmzkMRyKc.jpg",
        imageAlt: "Business Team in a Meeting"
    },
    {
        imageUrl: "https://www.catholicbishops.ie/wp-content/uploads/2015/05/family.jpg",
        imageAlt: "Outdoor Group Activity"
    },
    {
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2201786065/display_1500/stock-photo-a-group-of-multiracial-friends-has-a-great-time-at-the-roof-nightclub-in-the-summertime-clubbing-2201786065.jpg",
        imageAlt: "Group of Friends Smiling Together"
    },
    {
        imageUrl: "https://www.marketing91.com/wp-content/uploads/2020/06/Professional-networking-events.jpg",
        imageAlt: "Business Team in a Meeting"
    },
    {
        imageUrl: "https://www.catholicbishops.ie/wp-content/uploads/2015/05/family.jpg",
        imageAlt: "Outdoor Group Activity"
    },
    {
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2201786065/display_1500/stock-photo-a-group-of-multiracial-friends-has-a-great-time-at-the-roof-nightclub-in-the-summertime-clubbing-2201786065.jpg",
        imageAlt: "Group of Friends Smiling Together"
    },
    {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/00/58/42/64/500_F_58426476_Kjrv34EXbCsbortM9b18fI6nmzkMRyKc.jpg",
        imageAlt: "Business Team in a Meeting"
    },
    {
        imageUrl: "https://www.catholicbishops.ie/wp-content/uploads/2015/05/family.jpg",
        imageAlt: "Outdoor Group Activity"
    },
    {
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2201786065/display_1500/stock-photo-a-group-of-multiracial-friends-has-a-great-time-at-the-roof-nightclub-in-the-summertime-clubbing-2201786065.jpg",
        imageAlt: "Group of Friends Smiling Together"
    },
    {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/00/58/42/64/500_F_58426476_Kjrv34EXbCsbortM9b18fI6nmzkMRyKc.jpg",
        imageAlt: "Business Team in a Meeting"
    },
    {
        imageUrl: "https://www.catholicbishops.ie/wp-content/uploads/2015/05/family.jpg",
        imageAlt: "Outdoor Group Activity"
    },
    {
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2201786065/display_1500/stock-photo-a-group-of-multiracial-friends-has-a-great-time-at-the-roof-nightclub-in-the-summertime-clubbing-2201786065.jpg",
        imageAlt: "Group of Friends Smiling Together"
    },
    {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/00/58/42/64/500_F_58426476_Kjrv34EXbCsbortM9b18fI6nmzkMRyKc.jpg",
        imageAlt: "Business Team in a Meeting"
    },
    {
        imageUrl: "https://www.catholicbishops.ie/wp-content/uploads/2015/05/family.jpg",
        imageAlt: "Outdoor Group Activity"
    },
];



const groupNames = [
    "The Happy Campers",
    "Mind Masters",
    "Family and Sons",
    "Party Rockers",
    "Professional Network",
    "Party Poopers",
    "Giggle Factory",
    "Crypto Learning",
    "Dancefloor Divas",
    "Laugh Riot",
    "Deep Discussions",
    "Leadership Alliance",
    "Celebration Nation",
    "Witty Wanderers",
    "Critical Thinkers",
    "Midnight Madness",
    "Fun-tastic Four",
    "Problem Solvers",
    "Corporate Collaborators",
    "The Party Animals",
    "Mirth Makers",
    "Serious Strategists",
    "Strategic Partners",
    "Vibe Tribe",
    "Banter Brigade",
    "The Analysts",
    "Business Brigade",
    "Disco Dynamos",
    "Joyful Jokers",
    "Focus Group",
    "The Advisory Group",
    "The Night Owls",
    "The Chuckle Squad",
    "The Realists",
    "Official Delegates",
    "Festive Friends",
    "Silly Squad",
    "The Negotiators",
    "Rave Squad"
];


const enhancedConversations = (conversations) => {
    return conversations.map((conversation, index) => {
        // Get the profile image and group name by index
        const profileImage = groupImages[index];
        const groupName = groupNames[index];

        // Return a new object with the conversation, profile image, and group name
        return {
            ...conversation,
            profileImage: profileImage.imageUrl,
            profileAlt: profileImage.imageAlt,
            groupName: groupName,
        };
    })
};

export const conversationsSaga = function* () {
    yield delay(1000);
    // yield put(messagesLoaded(conversations[0].id, conversations[0].messages, false, null));



    const data = yield call(fetchChatSessions);
    console.log("Fetched data:", data);

    const chats = enhancedConversations(data || conversations2)

    yield put({
        type: 'CONVERSATIONS_LOADED',
        payload: {
            conversations: chats,
            selectedConversation: chats[0]
        }
    });
}

export function* watchGetConversationsAsync() {
    yield takeEvery('CONVERSATIONS_REQUESTED', conversationsSaga);
}

