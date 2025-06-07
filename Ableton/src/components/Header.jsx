import React from 'react';
import { Barcode } from 'lucide-react';


const Header = () => {
    return (
        <div className='bg-white mt-0 h-20 '>
            <nav className='flex items-center justify-between mx-5 border-b-2 border-gray-300'>
                <div className='flex'>
                    <Barcode strokeWidth={2} height={40} width={40} className='m-4'/>
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
                <div  className='flex gap-10 font-mono m-6'>
                    <a href="#" className='text-blue-700'><p>Try Live 12 For Free</p></a>
                    <a href="#"><p>Log in Or Register</p></a>


                </div>
            </nav>
            <nav className='bg-white mt-1 h-18 flex items-center'>
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
