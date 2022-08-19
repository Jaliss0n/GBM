import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import logo from '../imgs/Ativo1.svg'
import { Home } from "@mui/icons-material";
import "../components_css/Sidebar.css"


export default function Sidebar() {
    return (
        <div id="corpo-sidebar" >
            <div id='logo-sidebar'>
                <img src={logo} alt="logo" width='240px' />
            </div>

            <div>
                <Typography variant="h5" color='primary'>Principal</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>

                            <ListItemIcon>
                                <Home color='primary' />
                            </ListItemIcon>

                            <ListItemText 
                                style={{color:'white'}} 
                                primary={<Typography variant="h5">Home</Typography>} 
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}