import React from 'react';
import {classNames} from "@/utils/classNames";
import Navbar from "../../../navbar";

interface IScrollData {
    y: number,
    lastY: number
}
const  Nav = () => {
    const [scrollData, setScrollData] = React.useState<IScrollData>({
        y: 0,
        lastY: 0
    })

    const [showNav, setShowNav] = React.useState(true)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollData(prevState => {
                return({
                    y: window.scrollY,
                    lastY: prevState.y
                })
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        console.log(scrollData)

        if (scrollData.y < 100) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }

        if (scrollData.lastY > scrollData.y) {
            setShowNav(true)
        } else {
            if (scrollData.y > 100) setShowNav(false)
        }
    }, [scrollData])

    return (
        <>
            <header className={classNames(
                !showNav && 'translate-y-[-100%]',
                'bg-[#2d2d2d] w-full h-12 sticky top-0 transition-all z-10 opacity-90'
            )}>
                <Navbar />
            </header>
        </>
    )};

export default Nav;