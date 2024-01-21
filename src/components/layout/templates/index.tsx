import React from "react"
import TestNav from './testNav'

const Layout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div>
            {/*<h1>Main Layout</h1>*/}
            <TestNav />
            <main className="relative">{children}</main>
            {/*<Footer />*/}
        </div>
    )
}

export default Layout
