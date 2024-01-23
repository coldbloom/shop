import React from "react"
import Nav from './nav/nav'

const Layout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="relative">{children}</main>
            {/*<Footer />*/}
        </>
    )
}

export default Layout
