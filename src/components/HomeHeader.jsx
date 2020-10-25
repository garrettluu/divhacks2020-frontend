import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import ghlogo from '../assets/ghlogo.svg';

export default () => {
    return (
        // <div>
        //     <NavLink to="/about">
        //         About
        //     </NavLink>
        //     <NavLink to="/contact">
        //         Contact
        //     </NavLink>
        // </div>
        <Menu borderless>
            <Menu.Item>
                <img src={ghlogo}/>
            </Menu.Item>
            <Menu.Item>
                About
            </Menu.Item>
            <Menu.Item>
                Contact
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    Sign up
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};