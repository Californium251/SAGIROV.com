import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import axios from 'axios';
import Navigation from './Navigation.tsx';

const Header = () => {
    const [menuItems, setMenuItems] = useState<Array<string>>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}api/1`);
            setMenuItems(JSON.parse(res.data.menu));
        }
        fetchData();
    }, []);
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-wrapper'>
                    <div className='header__logo'>
                        <img src='/images/logo.png' alt='logo' />
                    </div>
                </div>
                <Navigation className='header__nav'>
                    {menuItems.map((item, index) => <a key={index} href='/' className='header__link'>{item}</a>)}
                </Navigation>
            </div>
        </header>
    );
};

export default Header;