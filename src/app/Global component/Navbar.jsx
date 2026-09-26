'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import logo from "../../../assets/logo.png";
import { PlanContext } from '../context/PlanContext';

const Navbar = () => {
    const { todaysPlan, savedList } = useContext(PlanContext);
    const pathname = usePathname();

    const isWorkoutsActive = pathname === '/';
    const isMyPlanActive = pathname === '/myplan';

    return (
        <nav className="w-full bg-black/90 backdrop-blur-md text-white px-4 sm:px-8 py-4 border-b border-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src={logo} alt="Fitlog Logo" width={32} height={32} className="object-contain" />
                        <span className="font-bold text-xl tracking-wider text-white">FITLOG</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <Link 
                        href="/" 
                        className={`px-4 py-2 rounded-full font-medium text-sm border transition-colors ${
                            isWorkoutsActive 
                                ? 'bg-[#1a1a1a] text-[#ccff00] border-[#ccff00]/20' 
                                : 'text-gray-300 hover:text-white border-transparent'
                        }`}
                    >
                        Workouts
                    </Link>
                    <Link 
                        href="/myplan" 
                        className={`px-4 py-2 rounded-full font-medium text-sm border transition-colors ${
                            isMyPlanActive 
                                ? 'bg-[#1a1a1a] text-[#ccff00] border-[#ccff00]/20' 
                                : 'text-gray-300 hover:text-white border-transparent'
                        }`}
                    >
                        My Plan
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Plan</span>
                        <span className="bg-[#ccff00] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {todaysPlan.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Saved</span>
                        <span className="bg-[#1a1a1a] border border-gray-700 text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            {savedList.length}
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;