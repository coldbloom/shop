import React from "react"
import Nav from './nav/nav'

const Layout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div>
            {/*<h1>Main Layout</h1>*/}
            <Nav />
            <main className="relative">{children}</main>
            {/*<Footer />*/}
        </div>
    )
}

export default Layout
