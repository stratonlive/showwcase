import React from 'react'
import Header from '../../atom/header/header'
import Footer from '../../atom/footer/footer'
import Meta from '../../atom/meta/meta'


const Layout = ({ children } : any) => {
    return (
        <div>
            <Meta />
            <Header />
                { children }
                
            <Footer />
        </div>
    )
}

export default Layout