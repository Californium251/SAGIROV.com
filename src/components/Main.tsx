import React from 'react';
import Features from './Features.tsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../styles/main.css';
import '../styles/main-header.css';

const Main = () => {
    const isNarrowScreen = useMediaQuery('(max-width: 768px)');
    console.log(isNarrowScreen);
    if (!isNarrowScreen) {
        return <div className='main'>
            <div className='main-header'>
                <h1 className='main-header__header'>ПУТЕШЕСТВИЕ</h1>
                <h2 className='main-header__subheader'>на красную планету</h2>
                <div className='main-header__button-wrapper'>
                    <button className='main-header__button'>Начать путешествие</button>
                </div>
            </div>
            <Features />
        </div>;
    }
    return <div className='main--narrow'>
        <div className='main-header__wrapper--narrow'>
            <h1 className='main-header__header'>ПУТЕШЕСТВИЕ</h1>
            <h2 className='main-header__subheader'>на красную планету</h2>
        </div>
        <Features />
        <div className='main-header__button-wrapper'>
            <button className='main-header__button'>Начать путешествие</button>
        </div>
    </div>
};

export default Main;