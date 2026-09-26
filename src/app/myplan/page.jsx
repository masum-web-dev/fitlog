import React from 'react';
import Link from 'next/link';

const MyPlanPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 text-white space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-1">
                    MY PLAN
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Stats Summary Card */}
            <div className="bg-[#121417] border border-gray-800 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:border-r border-gray-800/80 pr-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Exercises</p>
                    <p className="text-[#ccff00] text-3xl sm:text-4xl font-extrabold">2</p>
                </div>
                <div className="sm:border-r border-gray-800/80 pr-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Minutes</p>
                    <p className="text-white text-3xl sm:text-4xl font-extrabold">23</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Calories</p>
                    <p className="text-white text-3xl sm:text-4xl font-extrabold">190</p>
                </div>
            </div>

            {/* Tabs and Sort Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="bg-[#121417] border border-gray-800 p-1 rounded-xl flex items-center gap-1">
                    <button className="px-4 py-2 text-xs font-bold uppercase rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer">
                        Today's Plan
                    </button>
                    <button className="px-4 py-2 text-xs font-bold uppercase rounded-lg bg-gray-800 text-white shadow-sm cursor-pointer">
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Sort By</span>
                    <select className="bg-[#121417] border border-gray-800 text-white text-xs font-semibold py-2 px-3 rounded-xl focus:outline-none cursor-pointer">
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Empty State Box */}
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
        </div>
    );
};

export default MyPlanPage;