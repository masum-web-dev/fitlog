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

    const { name } = workout;

    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;