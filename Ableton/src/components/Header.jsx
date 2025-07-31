import React, { useState } from 'react';
import { Barcode, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-white mt-0 h-auto md:h-20'>
            <nav className='flex items-center justify-between mx-5 border-b-2 border-gray-300'>
                <div className='flex items-center'>
                    <Barcode strokeWidth={2} height={40} width={40} className='m-4'/>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-10 font-mono m-6'>
                            <li>Live</li>
                            <li>Push</li>
                            <li>Move</li>
                            <li>Note</li>
                            <li>Link</li>
                            <li>Shop</li>
                            <li>Packs</li>
                            <li>Help</li>
                            <li className='text-red-600'>More <span className='font-extrabold'>+</span></li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex gap-10 font-mono m-6'>
                    <a href="#" className='text-blue-700'><p>Try Live 12 For Free</p></a>
                    <a href="#"><p>Log in Or Register</p></a>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-gray-600 hover:text-gray-900'>
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className='md:hidden bg-white'>
                    <ul className='flex flex-col items-center gap-4 font-mono p-4'>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Move</li>
                        <li>Note</li>
                        <li>Link</li>
                        <li>Shop</li>
                        <li>Packs</li>
                        <li>Help</li>
                        <li className='text-red-600'>More <span className='font-extrabold'>+</span></li>
                        <li className='text-red-600'>About</li>
                        <li>Jobs</li>
                        <li>Apprenticeships</li>
                        <a href="#" className='text-blue-700'><p>Try Live 12 For Free</p></a>
                        <a href="#"><p>Log in Or Register</p></a>
                    </ul>
                </div>
            )}
            <nav className='hidden md:flex bg-white mt-1 h-18 items-center'>
                <ul className='flex gap-10 ml-10 font-mono'>
                    <li className='text-red-600'>About</li>
                    <li>Jobs</li>
                    <li>Apprenticeships</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
