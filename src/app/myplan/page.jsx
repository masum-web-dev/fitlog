"use client";
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { PlanContext } from '../context/PlanContext';

const MyPlanPage = () => {
    const { todaysPlan, savedList, removeFromPlan, removeFromSaved } = useContext(PlanContext);
    const [activeTab, setActiveTab] = useState('plan');
    const [sortBy, setSortBy] = useState('duration');
    const [doneWorkouts, setDoneWorkouts] = useState([]);

    const currentList = activeTab === 'plan' ? todaysPlan : savedList;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') {
            return Number(b.duration) - Number(a.duration);
        } else if (sortBy === 'calories') {
            return Number(b.caloriesBurned) - Number(a.caloriesBurned);
        } else if (sortBy === 'rating') {
            return Number(b.rating) - Number(a.rating);
        }
        return 0;
    });

    const handleMarkAsDone = (item) => {
        if (!doneWorkouts.includes(item.id)) {
            setDoneWorkouts([...doneWorkouts, item.id]);
            toast.success(`"${item.name}" marked as done! 🎉`, { position: "top-right" });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-22 sm:py-20 text-white space-y-8">
            <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-1">
                    MY PLAN
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="bg-[#121417] border border-gray-800 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:border-r border-gray-800/80 pr-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Exercises</p>
                    <p className="text-[#ccff00] text-3xl sm:text-4xl font-extrabold">{sortedList.length}</p>
                </div>
                <div className="sm:border-r border-gray-800/80 pr-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Minutes</p>
                    <p className="text-white text-3xl sm:text-4xl font-extrabold">
                        {sortedList.reduce((total, item) => total + (Number(item.duration) || 0), 0)}
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Calories</p>
                    <p className="text-white text-3xl sm:text-4xl font-extrabold">
                        {sortedList.reduce((total, item) => total + (Number(item.caloriesBurned) || 0), 0)}
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="bg-[#121417] border border-gray-800 p-1 rounded-xl flex items-center gap-1">
                    <button 
                        onClick={() => setActiveTab('plan')}
                        className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer ${
                            activeTab === 'plan' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Today's Plan
                    </button>
                    <button 
                        onClick={() => setActiveTab('saved')}
                        className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer ${
                            activeTab === 'saved' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Sort By</span>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#121417] border border-gray-800 text-white text-xs font-semibold py-2 px-3 rounded-xl focus:outline-none cursor-pointer uppercase"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {sortedList.length === 0 ? (
                <div className="border border-dashed border-gray-800 rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[350px] bg-[#121417]/20">
                    <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white">
                            NOTHING HERE YET
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            Browse the library and add a lift to get today moving.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="bg-[#ccff00] text-black font-bold py-3 px-6 rounded-xl hover:bg-[#b3e600] transition-all text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#ccff00]/10"
                    >
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {sortedList.map((item, index) => {
                        const isDone = doneWorkouts.includes(item.id);

                        return (
                            <div 
                                key={`${item.id}-${index}`} 
                                className="bg-[#121417] border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-800">
                                        <Image 
                                            src={item.image} 
                                            alt={item.name} 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-sm sm:text-base uppercase tracking-wide text-white">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs mb-1.5">{item.equipment}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-300">
                                            <span>⏱️ {item.duration} min</span>
                                            <span>🔥 {item.caloriesBurned} kcal</span>
                                            <span>⭐ {item.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                                    <Link 
                                        href={`/workouts/${item.id}`}
                                        className="border border-gray-700 hover:border-gray-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === 'plan' && (
                                        <button 
                                            onClick={() => handleMarkAsDone(item)}
                                            disabled={isDone}
                                            className={`text-xs font-bold py-2.5 px-4 rounded-xl transition-all ${
                                                isDone 
                                                    ? 'bg-gray-800 text-gray-400 cursor-not-allowed opacity-60' 
                                                    : 'bg-[#ccff00] text-black hover:bg-[#b3e600] cursor-pointer'
                                            }`}
                                        >
                                            {isDone ? '✓ Done' : '✓ Mark as Done'}
                                        </button>
                                    )}

                                    <button 
                                        onClick={() => activeTab === 'plan' ? removeFromPlan(item.id) : removeFromSaved(item.id)}
                                        className="text-gray-400 hover:text-red-400 p-2 transition-colors cursor-pointer text-base font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyPlanPage;