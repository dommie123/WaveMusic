import React, { useState } from 'react';

import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material';

import { IconButton } from '../IconButton/IconButton';

import { Menu as MenuIcon } from '@mui/icons-material';

import './SimpleDrawer.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SimpleDrawerProps {
    anchor: Anchor;
    options: Array<any>;
    className?: string;
}

interface AnchorState {
    top: boolean,
    bottom: boolean,
    left: boolean,
    right: boolean
}

export const SimpleDrawer:React.FC<SimpleDrawerProps> = (props) => {
    const { anchor, options, className } = props;   // options = [{ icon: <Icon />, label: "Label" }]

    const [state, setState] = useState<AnchorState>({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor:Anchor, open:boolean) => (event:React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open});
    };

    const list = (anchor:Anchor) => (
        <Box
            component={"div"}
            sx={{ width: (anchor === 'top' || anchor === 'bottom') ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, true)}
        >
            <List>
                {options.map(({ icon, label, handleSelect }) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton onClick={handleSelect}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={className}>
           {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}> */}
                    <IconButton className={`${className}-button`} onClick={toggleDrawer(anchor, true)} icon={<MenuIcon />} />
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        className={`${className}-drawer`}
                    >
                        {list(anchor)}
                    </Drawer>
                {/* </React.Fragment> */}
        {/* //    ))}  */}
        </div>
    );
}