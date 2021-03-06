import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut} =useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,alignItems:'center'  } }>
                        Bike palace
                    </Typography>
                    
                    <Link to="" className='nav-link text-black'><span style={{color:'white'}}>signed by :</span><span style={{ color: 'white' }}>{user.displayName} </span></Link>
                    <Link to='/home'>
                        <Button color="inherit" sx={{ color: '#fff' }}>Home</Button>
                    </Link>
                    <Link to= '/allProducts'>
                        <Button color="inherit" sx={{color:'#fff'}}>Best Products</Button>
                    </Link>
                    <Link to= '/newslatter'>
                        <Button color="inherit" sx={{color:'#fff'}}>Newsletter</Button>
                    </Link>
                    

                    {
                        user?.email ? 
                            
                        <Box>
                                <Link to='/dashboard' >
                                    <Button color="inherit" sx={{ color: '#fff' }}> Inventory Management</Button>
                                </Link>
                                <Button onClick={logOut} color="inherit" sx={{ color: '#fff' }}>LogOut</Button>
                        </Box>
                            

                        :
                            <Link to='/login' >
                                <Button color="inherit" sx={{ color: '#fff' }}>Login</Button>
                            </Link>
                    }
                    
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;