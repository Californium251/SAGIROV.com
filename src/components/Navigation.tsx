import React, { FC, PropsWithChildren, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const Navigation: FC<PropsWithChildren<{ className: string }>> = ({ children, className }) => {
    const isNarrowScreen = useMediaQuery('(max-width: 768px)');
    const [drawerOpened, setDrawerOpened] = useState<boolean>(false);
    const toggleDrawer = () => setDrawerOpened(!drawerOpened);
    if (isNarrowScreen) {
        return <>
            <button onClick={toggleDrawer} style={{
                border: 'none',
                backgroundColor: 'transparent',
            }}>
                <img src='/public/images/menu-button.svg' alt='menu' width='20px' height='20px' />
            </button>
            <Drawer
                anchor='right'
                open={drawerOpened}
                onClose={toggleDrawer} sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'black',
                    }
                }}
            >
                <List>
                    {children && children.map((child, index) => <ListItem key={index}>
                        <ListItemButton>{child}</ListItemButton>
                    </ListItem>)}
                </List>
            </Drawer>
        </>
    }
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Navigation;