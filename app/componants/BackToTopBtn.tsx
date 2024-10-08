'use client'

import React, { useState, useEffect } from 'react'
import backToTop from "../public/back_to_top.png"
import Image from 'next/image';


export default function BackToTopBtn() {
    const [isImageVisible, setIsImageVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsImageVisible(window.scrollY > 200); // Adjust the scroll threshold
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hidden fixed bottom-5 right-5 z-50 cursor-pointer" style={{ display: isImageVisible ? 'block' : 'none' }}>
            <Image src={backToTop} width={50} alt="backToTop" onClick={scrollToTop}></Image>
        </div>
    );
}
