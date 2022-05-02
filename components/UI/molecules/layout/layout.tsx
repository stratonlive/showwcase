import React from 'react'
import Header from '@components/UI/atom/header/header'
import Footer from '@components/UI/atom/footer/footer'
import Meta from '@components/UI/atom/meta/meta'


const Layout = ({ children } : any) => {
    return (
        <>
            <Meta />
            <Header />
                { children }
                
            <Footer />
        </>
    )
}

export default Layout