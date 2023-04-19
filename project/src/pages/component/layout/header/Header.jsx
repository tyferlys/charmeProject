import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";

const Header = () => {

    return (
        <header className="min-w-full overflow-hidden">
            <div className="flex flex-col items-center min-w-full overflow-hidden">
                <div className="w-11/12 m-auto flex flex-row items-center justify-between py-4">
                    <motion.div
                        initial={{
                            y:-100,
                        }}
                        animate={{
                            y:0,
                        }}
                        transition={{
                            duration:0.4,
                            type:"spring",
                        }}

                        className="flex flex-row gap-4 w-1/12"
                    >
                        <div className="p-2 hover:text-white hover:bg-black rounded-3xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div className="p-2 hover:text-white hover:bg-black rounded-3xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                    </motion.div>
                    <div className="flex flex-col items-center gap-0">
                        <motion.div className="flex flex-col"
                            initial={{
                                scale:0,
                                skewX:100,
                            }}
                            animate={{
                                scale:1,
                                skewX:0,
                            }}
                            transition={{
                                duration:0.2,
                            }}
                        >
                            <div className="text-3xl font-light tracking-widest min-w-full text-center p-1">Charme</div>
                            <div className="text-md p-1">Современный магазин одежды</div>
                        </motion.div>
                        <div className="flex flex-row min-w-full justify-center gap-5 mt-2 overflow-hidden">
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{
                                        x:-90,
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration:0.4,
                                        type:"spring",
                                        delay: 0,
                                    }}
                                >
                                    <div className="duration-200 text-xs uppercase underline py-1 px-2 cursor-pointer hover:bg-black hover:text-white rounded-md">
                                        Главная
                                    </div>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{
                                        x:-90,
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration:0.4,
                                        type:"spring",
                                        delay: 0.1,
                                    }}
                                >
                                    <div className="duration-200 text-xs uppercase underline py-1 px-2 cursor-pointer hover:bg-black hover:text-white rounded-md">
                                        Коллекции
                                    </div>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{
                                        x:-90,
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration:0.4,
                                        type:"spring",
                                        delay: 0.2,
                                    }}
                                >
                                    <div className="duration-200 text-xs uppercase underline py-1 px-2 cursor-pointer hover:bg-black hover:text-white rounded-md">
                                        История
                                    </div>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden cursor-pointer">
                                <motion.div
                                    initial={{
                                        x:-90,
                                    }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration:0.4,
                                        type:"spring",
                                        delay: 0.3,
                                    }}
                                >
                                    <div className="duration-200 text-xs uppercase underline py-1 px-2 cursor-pointer hover:bg-black hover:text-white rounded-md">
                                        О компании
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{
                            y:100,
                        }}
                        animate={{
                            y:0,
                        }}
                        transition={{
                            duration:0.4,
                            type:"spring",
                        }}

                        className="flex flex-row gap-4 w-1/12"
                    >
                        <div className="p-2 hover:text-white hover:bg-black rounded-3xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <div className="p-2 hover:text-white hover:bg-black rounded-3xl duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;