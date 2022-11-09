/* eslint-disable jsx-a11y/no-distracting-elements */

import React, { useEffect } from 'react';

const TextScrolling = () => {
    const [text, setText] = React.useState('Welcome to FDFN');
    useEffect(() => {
        fetch('https://fdfn-server-v2.vercel.app/api/v1/readNotification')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setText(data.data[0].notificationText);
            });
    }, []);

    return (
        <div className="py-2 bg-red-600">
            <marquee className="text-white text-xl">{text}</marquee>
        </div>
    );
};

export default TextScrolling;
