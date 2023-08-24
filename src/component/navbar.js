import React, { useState } from 'react';
// import { HiveOutlined } from '@mui/icons-material'
import logo from '../asset/Logo.svg'
import {BsCart2} from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { ListItemButton, ListItemText } from '@mui/material';
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Navbar() {
    const [OpenMenu,setOpenMenu] = useState(false);
    const menuOption = [
        {
            text : 'Home',
            icon : <HomeIcon />
        },
        {
            text : 'About',
            icon : <InfoIcon />
        },
        {
            text : 'testimonials',
            icon : <CommentRoundedIcon />
        },
        {
            text : 'Contact',
            icon : <PhoneRoundedIcon />
        },
        {
            text : 'Cart',
            icon : <ShoppingCartRounded />
        },
    ]
  return (
    <div>
        <h1>
            <nav>
                <div className='nav-logo-container'>
                    <img src={logo} alt="No Logo" />
                </div>
                <div className='navbar-links-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                    <a href="">
                        <BsCart2 className='navbar-cart-icon'/>
                    </a>
                    <button className='primary-button'>Booking Open</button>
                </div>
                <div className='navbar-menu-container'>
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>
                <Drawer open={OpenMenu} onClose = {() => setOpenMenu(false)} anchor="right" >
                    <Box sx= {{width : '250px'}}
                        role = 'presentation'
                        onClick={()=> setOpenMenu(false)}
                        onKeyDown={()=> setOpenMenu(false)}>
                            <List>
                                {menuOption.map((items) => (
                                    <ListItem key={items.text}>
                                        <ListItemButton>
                                            <ListItemIcon>{items.icon}</ListItemIcon>
                                            <ListItemText>{items.text}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        <Divider />
                    </Box>
                </Drawer>
            </nav>
        </h1>
    </div>
  )
}
