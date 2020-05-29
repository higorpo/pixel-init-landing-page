import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import './normalize.css';

export function wrapRootElement({ element }) {
    return (
        <ThemeProvider theme={theme}>
            <div style={{
                background: theme.background,
                margin: 0
            }}>
                {element}
            </div>
        </ThemeProvider>
    )
}