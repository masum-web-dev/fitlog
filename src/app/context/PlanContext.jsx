"use client";
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const PlanContext = createContext();

const PlanContextProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedList, setSavedList] = useState([]);

    const addToPlan = (workout) => {
        const isExist = todaysPlan.filter((item) => item.id === workout.id).length > 0;
        if (isExist) {
            toast.warn("This workout is already in Today's Plan!", { position: "top-right" });
            return;
        }
        setTodaysPlan([...todaysPlan, workout]);
        toast.success("Added to Today's Plan!", { position: "top-right" });
    };

    const saveForLater = (workout) => {
        const isExist = savedList.filter((item) => item.id === workout.id).length > 0;
        if (isExist) {
            toast.warn("This workout is already saved!", { position: "top-right" });
            return;
        }
        setSavedList([...savedList, workout]);
        toast.success("Saved for later!", { position: "top-right" });
    };

    const removeFromPlan = (id) => {
        setTodaysPlan(todaysPlan.filter((item) => item.id !== id));
        toast.info("Removed from Today's Plan", { position: "top-right" });
    };

    const removeFromSaved = (id) => {
        setSavedList(savedList.filter((item) => item.id !== id));
        toast.info("Removed from Saved", { position: "top-right" });
    };

    return (
        <PlanContext.Provider value={{ todaysPlan, savedList, addToPlan, saveForLater, removeFromPlan, removeFromSaved }}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanContextProvider;