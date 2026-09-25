import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Workout = ({ workout }) => {
    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

    return (
        <Link href={`/workouts/${id}`} className="block group">
            <div className="bg-[#121417] border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-[#ccff00]/50 group-hover:shadow-2xl group-hover:shadow-[#ccff00]/10 h-full">
                <div>
                    <div className="relative w-full h-48 overflow-hidden">
                        <Image 
                            src={image} 
                            alt={name} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    
                    <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {muscleGroups.map((group, index) => (
                                <span key={index} className="bg-[#ccff00] text-black text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                                    {group}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-white font-extrabold text-lg tracking-wide uppercase mb-1 group-hover:text-[#ccff00] transition-colors">
                            {name}
                        </h3>
                        
                        <p className="text-gray-400 text-xs">
                            {equipment}
                        </p>
                    </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <span>⏱</span>
                        <span>{duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>🔥</span>
                        <span>{caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>⭐</span>
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Workout;