import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 mt-20 md:mt-30 mb-10'>
            <div><h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold font-sans mb-10'>Ableton</h1></div>
            <div className='flex flex-col md:flex-row justify-between gap-10'>
                <div className='text-md w-full font-mono'>
                    <h1 className="font-semibold text-xl">Community</h1>
                    <h1>Register Live, Push or Move.</h1>
                    <h1>About Ableton.</h1>
                    <h1>Jobs</h1>
                    <ul className='flex gap-3 mt-4'>
                        <li><Facebook /></li>
                        <li><Linkedin /></li>
                        <li><Twitter /></li>
                        <li><Instagram /></li>
                    </ul>
                </div>
                <div className='text-md w-full font-mono'>
                    <h1 className='font-semibold text-xl'>Education</h1>
                    <h1>Offers for students and teachers.</h1>
                    <h1>Ableton for the Classroom.</h1>
                    <h1>Ableton for Colleges and Universities.</h1>
                </div>
                <div className='text-md w-full font-mono'>
                    <h1 className='font-semibold text-xl'>Sign up to our newsletter</h1>
                    <p>Enter your email address to stay up to
                        date with the latest offers, tutorials,
                        downloads, surveys and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
