import React from 'react';
import Header from './Header.tsx';
import Main from './Main.tsx';
import '../styles/index.css';

const Index = () => {
    return (
        <div className='page'>
            <Header />
            <Main />
        </div>
    );
};

export default Index;