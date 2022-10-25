import React from 'react';
import Header from './header';
import Main from './main';
import Banner from './banner';
import Treatments from '../desktop/treatments';
import ConsultingTiming from './consulting-timing';
//import Footer from './footer';
const Mobileview = () => {
    return (
        <div>
            <Header />
            <Main>
                <Banner/>
                <Treatments/>
                <ConsultingTiming/>
            </Main>
            {/* <Footer /> */}
        </div>
    )
}
export default Mobileview;