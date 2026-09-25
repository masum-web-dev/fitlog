import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-800/60 px-6 py-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src={logo} alt="Fitlog Logo" width={28} height={28} className="object-contain" />
                        <span className="font-bold text-lg tracking-wider text-white">FITLOG</span>
                    </Link>
                </div>

                <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
                    &copy; 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    );
};

export default Footer;