import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar } from '@material-ui/core';

export const Header = props => {

    const { title } = props

    return (
        <AppBar position="static">
            <Toolbar>{title}</Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header