import React from 'react';
import Header from './header';
import Main from './main';
import Banner from './banner';
import Treatments from './treatments';
import ConsultingTiming from './consulting-timing';
import Footer from './footer';
const DesktopView = () => {
    return (
        <>
            <Header />
            <Main>
                <Banner />
                <Treatments />
                <ConsultingTiming />
            </Main>
            <Footer />
        </>
    )
}
export default DesktopView;