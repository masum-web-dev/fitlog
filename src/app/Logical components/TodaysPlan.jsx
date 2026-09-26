"use client";
import React, { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';

const TodaysPlan = ({ workout }) => {
    const { addToPlan } = useContext(PlanContext);

    const handleTodaysPlan = () => {
        addToPlan(workout);
    };

    return (
        <div>
            <button onClick={() => handleTodaysPlan()} className="flex-1 bg-[#ccff00] text-black font-bold py-3.5 px-6 rounded-xl hover:bg-[#b3e600] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#ccff00]/20 text-sm flex items-center justify-center gap-2 cursor-pointer">
                <span>📅</span> Add to today's plan
            </button>
        </div>
    );
};

export default TodaysPlan;