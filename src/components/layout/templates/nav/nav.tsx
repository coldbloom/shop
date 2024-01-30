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
        if (scrollData.y < 50) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }

        if (scrollData.lastY > scrollData.y) {
            setShowNav(true)
        } else {
            if (scrollData.y > 50) setShowNav(false)
        }
    }, [scrollData])

    return (
        <>
            <header className={classNames(
                !showNav && 'translate-y-[-100%]',
                'w-full h-12 sticky top-0 transition-all z-10 bg-[rgba(0,0,0,0.85)]'
            )}>
                <Navbar />
            </header>
        </>
    )};

export default Nav;