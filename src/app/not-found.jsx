import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center text-white space-y-6">
            <div className="space-y-2">
                <span className="text-[#ccff00] text-7xl sm:text-8xl font-black tracking-widest block">
                    404
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
                    Page Not Found
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
                    Looks like you pushed past your limits and wandered off the training ground. Let's get you back on track.
                </p>
            </div>

            <Link
                href="/"
                className="bg-[#ccff00] text-black font-bold py-3.5 px-8 rounded-xl hover:bg-[#b3e600] transition-all text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#ccff00]/10"
            >
                Back to Workouts
            </Link>
        </div>
    );
};

export default NotFoundPage;