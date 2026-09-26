import React from 'react';
import Image from 'next/image';

const getData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const workouts = await getData();

    const workout = workouts.find((item) => item.id.toString() === id.toString());

    if (!workout) {
        return <div className="text-center py-20 text-white animate-pulse">Workout not found!</div>;
    }

    const { name, image, description, muscleGroups, equipment, difficulty, sets, reps, duration, caloriesBurned, rating, instructions } = workout;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-white animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                
                <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group">
                    <Image 
                        src={image} 
                        alt={name} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="space-y-6 transition-all duration-500">
                    <div className="transform transition-all duration-500 hover:translate-x-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            {name}
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {muscleGroups?.map((group, index) => (
                            <span key={index} className="bg-[#ccff00] text-black text-xs font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider shadow-md shadow-[#ccff00]/10 transition-transform duration-300 hover:scale-105">
                                {group}
                            </span>
                        ))}
                    </div>

                    <div className="bg-[#121417] border border-gray-800 rounded-2xl overflow-hidden divide-y divide-gray-800/60 text-sm shadow-xl">
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Equipment</span>
                            <span className="font-medium text-right text-gray-200">{equipment}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Difficulty</span>
                            <span className="font-medium text-right text-gray-200">{difficulty}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Sets</span>
                            <span className="font-medium text-right text-gray-200">{sets}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Reps</span>
                            <span className="font-medium text-right text-gray-200">{reps}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Duration</span>
                            <span className="font-medium text-right text-gray-200">{duration} min</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Calories</span>
                            <span className="font-medium text-right text-gray-200">{caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5 transition-colors duration-200 hover:bg-gray-900/50">
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Rating</span>
                            <span className="font-medium text-right text-gray-200">⭐ {rating}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span> Instructions
                        </h3>
                        <div className="space-y-2.5 text-gray-300 text-sm leading-relaxed">
                            {instructions?.map((step, index) => (
                                <div key={index} className="flex gap-3 bg-[#121417]/50 border border-gray-800/40 p-3.5 rounded-xl transition-all duration-300 hover:border-gray-700 hover:translate-x-1">
                                    <span className="text-[#ccff00] font-bold">{index + 1}.</span>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 bg-[#ccff00] text-black font-bold py-3.5 px-6 rounded-xl hover:bg-[#b3e600] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#ccff00]/20 text-sm flex items-center justify-center gap-2">
                            <span>📅</span> Add to today's plan
                        </button>
                        <button className="flex-1 bg-[#121417] border border-gray-800 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center justify-center gap-2">
                            <span>🔖</span> Save for later
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WorkoutDetailsPage;