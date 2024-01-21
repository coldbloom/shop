import React from 'react';
import {classNames} from "@/utils/classNames";

interface IScrollData {
    y: number,
    lastY: number
}
const TestNav = () => {
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
            <div className={classNames(
                !showNav && 'translate-y-[-100%]',
                // scrollData.y < 100 && 'static',
                // scrollData.y > 100 && 'fixed',
                'bg-black w-full h-10 sticky top-0'
            )}>

            </div>
        </>
    );
};

export default TestNav;