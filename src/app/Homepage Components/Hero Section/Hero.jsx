"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../../assets/banner.png";

const HeroSection = () => {
    const fullText = "LOG EVERY SET.";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
                if (displayedText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
                if (displayedText === "") {
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-[#121417] border border-gray-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 overflow-hidden">
                
                <div className="space-y-6">
                    <span className="text-[#ccff00] font-semibold text-xs tracking-widest uppercase">
                        Workout Library
                    </span>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        TRAIN WITH INTENT. <br />
                        <span className="text-[#ccff00]">{displayedText}</span>
                        <span className="animate-pulse border-r-2 border-[#ccff00] ml-1"></span>
                    </h1>
                    
                    <p className="text-gray-400 text-sm md:text-base max-w-lg">
                        {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.`}
                    </p>
                    
                    <div>
                        <Link 
                            href="/workouts" 
                            className="inline-block bg-[#ccff00] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#b3e600] transition-colors"
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="transition-transform duration-700 hover:scale-105 hover:rotate-1">
                        <Image 
                            src={bannerImg} 
                            alt="Workout Banner" 
                            className="w-full max-w-md h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;