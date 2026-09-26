'use client';
import React, { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';

const SaveForLater = ({workout}) => {

    const {saveForLater, setSaveForLater} = useContext(PlanContext);

    const handleSaveForLater = () =>{
        setSaveForLater([...saveForLater, workout]);
    }

    return (
        <div>
            <button onClick={()=>handleSaveForLater()} className="flex-1 bg-[#121417] border border-gray-800 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center justify-center gap-2">
                <span>🔖</span> Save for later
            </button>
        </div>
    );
};

export default SaveForLater;