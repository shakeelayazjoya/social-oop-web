'use client';

import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleDropdown = (item) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    const menuItems = [
        // {
        //     name: 'Use Cases',
        //     href: '/use-cases',
        //     dropdown: [
        //         { name: 'Case Study 1', href: '/use-cases/case-study-1' },
        //         { name: 'Case Study 2', href: '/use-cases/case-study-2' },
        //         { name: 'Case Study 3', href: '/use-cases/case-study-3' },
        //     ],
        // },
        { name: 'About ', href: '/about' },

        // {
        //     name: 'Solutions',
        //     href: '/solutions',
        //     dropdown: [
        //         { name: 'Solution A', href: '/solutions/solution-a' },
        //         { name: 'Solution B', href: '/solutions/solution-b' },
        //         { name: 'Solution C', href: '/solutions/solution-c' },
        //     ],
        // },
        { name: 'Features', href: '/features' },

        { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact-us' },

    ];

    return (
        <nav className="px-6 py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
            <div className=" mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="https://socialoop.ai/assets/img/white-logo.png"
                            alt="Socialoop"
                            width={150}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex items-center text-slate-700 hover:text-slate-900 transition-all duration-300 relative font-medium
                                       after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
                                       after:bg-gradient-to-r after:from-indigo-600 after:to-blue-600
                                       hover:after:w-full after:transition-all after:duration-300"
                                        >
                                            {item.name}
                                            <FiChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {dropdownOpen[item.name] && (
                                            <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl py-2 z-10 border border-slate-200/60">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-slate-700 hover:text-slate-900 transition-all duration-300 relative font-medium
                                   after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
                                   after:bg-gradient-to-r after:from-indigo-600 after:to-blue-600
                                   hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login">
                        <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-[6px] rounded-lg font-medium relative overflow-hidden transition-all duration-500 ease-out bg-gradient-to-r from-indigo-600 to-blue-600 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-white shadow-sm hover:shadow-md">
                            Login
                        </button>
                    </Link>
                    <Link href="/try-for-free">
                        <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium bg-[length:100%_100%] hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                            Try for free
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-slate-200/60 p-4">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(item.name)}
                                        className="flex items-center w-full px-4 py-2 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-slate-900 transition-all duration-300 rounded-lg"
                                    >
                                        {item.name}
                                        <FiChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    {dropdownOpen[item.name] && (
                                        <div className="ml-4 space-y-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-slate-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-slate-900 transition-all duration-300 rounded-lg"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-slate-900 transition-all duration-300 rounded-lg"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="px-4 py-2 space-y-2">
                        <Link
                            href="/login"
                            className="block w-full text-center border-2 border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-blue-600 bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:text-white transition-all duration-500 ease-out"
                        >
                            Login
                        </Link>
                        <Link
                            href="/try-for-free"
                            className="block w-full text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
                        >
                            Try for free
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
