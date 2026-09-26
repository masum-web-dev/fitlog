'use client'; 
import React, { createContext, useState } from 'react';

export const PlanContext = createContext({});

const PlanContextProvider = ({children}) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saveForLater, setSaveForLater] = useState([]);

    const sharedDatas = {
        todaysPlan,
        setTodaysPlan,
        saveForLater,
        setSaveForLater
    }

    return (
        <PlanContext.Provider value={sharedDatas}>{children}</PlanContext.Provider>
    );
};

export default PlanContextProvider;

