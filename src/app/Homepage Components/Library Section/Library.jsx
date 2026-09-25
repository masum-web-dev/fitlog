import Workout from '@/app/Logical components/Workout';
import React from 'react';

const getData = async() =>{
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const LibrarySection = async() => {
    const workouts = await getData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                    THE LIBRARY
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    workouts.map((workout)=> <Workout key={workout.id} workout={workout}></Workout>)
                }
            </div>
        </div>
    );
};

export default LibrarySection;