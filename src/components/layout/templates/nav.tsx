import React, { useState, useEffect } from 'react';
import {classNames} from "@/utils/classNames";

const Nav = () => {
    const [hidden, setHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            console.log(currentScrollPos < 100, ' currentScrollPos < 100 ?')
            console.log((currentScrollPos < 100 && prevScrollPos > currentScrollPos), ' - условие, высота = ', currentScrollPos)
            if (prevScrollPos > currentScrollPos) {
                setHidden(false); // Скролл вверх - показать навбар
            } else {
                if (currentScrollPos < 100)
                    setHidden(false); // Скролл вниз - скрыть навбар
                else setHidden(true)
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            { (
                <div className={classNames(
                    prevScrollPos < 100
                    && 'relative',
                    hidden && 'hidden',
                    "bg-black w-full h-10 fixed z-20"
                )}>
                    {/* Ваш навбар здесь */}
                </div>
            )}
        </>
    );
};

export default Nav;
