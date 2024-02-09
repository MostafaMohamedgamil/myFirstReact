import React, { PureComponent } from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

class Layout extends PureComponent {


    render() {
        return <>
            <Navbar />

            <Outlet />

            <Footer />

        </>
    }
}

export default Layout