import React from 'react';
import '../styles/main-header.css';

const MainHeader = () => {
    return <div className='main-header'>
        <h1 className='main-header__header'>ПУТЕШЕСТВИЕ</h1>
        <h2 className='main-header__subheader'>на красную планету</h2>
        <div className='main-header__button-wrapper'>
            <button className='main-header__button'>Начать путешествие</button>
        </div>
    </div>;
};

export default MainHeader;