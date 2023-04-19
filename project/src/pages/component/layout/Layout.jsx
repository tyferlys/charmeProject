import React from 'react';
import Header from "@/pages/component/layout/header/Header";
import Footer from "@/pages/component/layout/footer/Footer";


const Layout = ({children}) => {
    return (
        <div className="min-w-full flex flex-col">
            <Header/>
            <main className="w-11/12 m-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;