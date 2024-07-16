// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [stream, setStream] = useState(null);

    return (
        <MyContext.Provider value={{ stream, setStream }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
