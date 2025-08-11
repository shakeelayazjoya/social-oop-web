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
        {
            name: 'Use Cases',
            href: '/use-cases',
            dropdown: [
                { name: 'Case Study 1', href: '/use-cases/case-study-1' },
                { name: 'Case Study 2', href: '/use-cases/case-study-2' },
                { name: 'Case Study 3', href: '/use-cases/case-study-3' },
            ],
        },
        { name: 'About ', href: '/about' },

        {
            name: 'Solutions',
            href: '/solutions',
            dropdown: [
                { name: 'Solution A', href: '/solutions/solution-a' },
                { name: 'Solution B', href: '/solutions/solution-b' },
                { name: 'Solution C', href: '/solutions/solution-c' },
            ],
        },
        { name: 'Features', href: '/features' },

        { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact-us' },

    ];

    return (
        <nav className="px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                                            className="flex items-center text-gray-700 transition-all duration-300 relative
                                       after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
                                       after:bg-gradient-to-r after:from-blue-500 after:to-pink-500
                                       hover:after:w-full after:transition-all after:duration-300"
                                        >
                                            {item.name}
                                            <FiChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {dropdownOpen[item.name] && (
                                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                                        className="text-gray-700 transition-all duration-300 relative
                                   after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
                                   after:bg-gradient-to-r after:from-blue-500 after:to-pink-500
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
                        <button className="border-2 border-blue-500 text-blue-500 px-6 py-[6px] rounded-md font-medium relative overflow-hidden transition-all duration-500 ease-out bg-gradient-to-r from-blue-500 to-pink-500 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-white">
                            Login
                        </button>
                    </Link>
                    <Link href="/try-for-free">
                        <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-medium bg-[length:100%_100%] hover:bg-[length:200%_100%] transition-all duration-500 ease-out">
                            Try for free
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(item.name)}
                                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
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
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
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
                                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="px-4 py-2 space-y-2">
                        <Link
                            href="/login"
                            className="block w-full text-center border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md font-medium bg-gradient-to-r from-blue-500 to-pink-500 bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:text-white transition-all duration-500 ease-out"
                        >
                            Login
                        </Link>
                        <Link
                            href="/try-for-free"
                            className="block w-full text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-medium bg-[length:100%_100%] hover:bg-[length:200%_100%] transition-all duration-500 ease-out"
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
