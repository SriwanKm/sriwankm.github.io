'use client'

import React, { useState, useEffect } from 'react'
import backToTop from "../public/back_to_top.png"
import Image from 'next/image';
import styles from '../page.module.css'


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
        <div className={`hidden fixed bottom-5 right-5 z-50 cursor-pointer cursor-pointer w-12 md:w-16 ${styles.backToTop}`} style={{ display: isImageVisible ? 'block' : 'none' }}>
            <Image src={backToTop} alt="backToTop" onClick={scrollToTop}></Image>
        </div>
    );
}
