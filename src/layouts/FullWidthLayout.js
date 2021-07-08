import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FullWidthLayout = props => {
    return (
        <div className="fH">
            <Header {...props}/>
            {props.children}
            <Footer />
        </div>
    );
}

export default FullWidthLayout;