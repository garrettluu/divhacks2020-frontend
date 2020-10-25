import React from 'react';
import { Menu, Search } from 'semantic-ui-react';

import logo from '../assets/ghlogo-dark.svg';

export default () => {
    return (
        <Menu borderless>
            <Menu.Item>
                <img src={logo}/>
            </Menu.Item>
            <Menu.Item>
                <Search/>
            </Menu.Item>
        </Menu>
    );
};