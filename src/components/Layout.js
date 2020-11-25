import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    color: 'black',
    pula: 'este'
};

function Layout(props) {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}



export default Layout;