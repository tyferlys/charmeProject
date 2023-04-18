import React from 'react';
import Header from "@/pages/component/layout/header/Header";
import Footer from "@/pages/component/layout/footer/Footer";


const Layout = ({children}) => {
    return (
        <div className="min-w-full min-h-screen flex flex-col">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;