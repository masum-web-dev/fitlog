import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-black text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
                
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src={logo} alt="Fitlog Logo" width={32} height={32} className="object-contain" />
                        <span className="font-bold text-xl tracking-wider text-white">FITLOG</span>
                    </Link>
                </div>

                <div className="flex justify-center items-center gap-6">
                    <Link href="/workouts" className="bg-[#1a1a1a] text-[#ccff00] px-4 py-2 rounded-full font-medium text-sm border border-[#ccff00]/20">
                        Workouts
                    </Link>
                    <Link href="/my-plan" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                        My Plan
                    </Link>
                </div>

                <div className="flex justify-end items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Plan</span>
                        <span className="bg-[#ccff00] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Saved</span>
                        <span className="bg-[#1a1a1a] border border-gray-700 text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;