// @flow

import { createMuiTheme } from '@material-ui/core/styles';

export const fontFamily = '"Europe", Arial';

export const build = createMuiTheme({
  fontFamily,
  palette: {
    default: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    primary: {
      light: '#218bff',
      main: '#007aff',
      dark: '#006be0',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff434b',
      main: '#e21821',
      dark: '#c31119',
      contrastText: '#fff'
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      h2: {
        fontSize: 22,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      h6: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily,
        color: '#000',
      },
      subtitle1: {
        fontFamily,
        color: '#000',
      },
      subtitle2: {
        fontFamily,
        color: '#000',
      },
      body1: {
        fontFamily,
        color: '#000',
      },
      body2: {
        fontSize: 14,
        fontFamily,
        color: '#000',
      },
      caption: {
        fontFamily,
        color: '#000',
        opacity: 0.6,
      }
    },
    MuiButton: {
      outlined: {
        fontFamily,
      },
      contained: {
        fontFamily,
      },
      text: {
        textTransform: 'none',
        fontFamily,
      }
    }
  },
});
