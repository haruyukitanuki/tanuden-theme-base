// Tanuden INTEROS Theme File
import {
  alpha,
  Box,
  createTheme,
  darken,
  lighten,
  ThemeOptions,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const GREY = {
  50: blueGrey[50],
  100: blueGrey[100],
  200: blueGrey[200],
  300: blueGrey[300],
  400: blueGrey[400],
  500: blueGrey[500],
  600: blueGrey[600],
  700: blueGrey[700],
  800: blueGrey[800],
  900: blueGrey[900],
  A100: blueGrey.A100,
  A200: blueGrey.A200,
  A400: blueGrey.A400,
  A700: blueGrey.A700,
};

export const PRIMARY_DARK = "#1c4778";
export const SECONDARY_DARK = GREY[500];
export const ERROR_DARK = "#ff3c2e";
export const WARNING_DARK = "#ffd900";
export const SUCCESS_DARK = "#66e061";
export const INFO_DARK = "#25caf4";
export const INVERSED_DARK = GREY[50];

export const BACKGROUND_DARK = {
  default: "#12171c",
  paper: GREY[800],
};

export const HEADER_FONT = `"BIZ UDPGothic"`;
export const HEADER_FONT_WEIGHT = 600;
export const SUBHEADER_FONT_WEIGHT = 600;
export const SUBTITLE_FONT_WEIGHT = 300;
export const BODY_FONT = `"BIZ UDPGothic"`;
export const SUBTITLE_LETTER_SPACING = undefined;

export const MONOSPACE_FONT = `"JetBrains Mono", monospace`;

const baselineTheme = createTheme();
export const getTheme = (): ThemeOptions => ({
  breakpoints: {
    values: {
      ...baselineTheme.breakpoints.values,
      lg: 1400,
    },
  },

  typography: {
    fontFamily: BODY_FONT,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontWeight: HEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "2rem",
    },
    h2: {
      fontWeight: HEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "1.8rem",
    },
    h3: {
      fontWeight: HEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "1.6em",
    },
    h4: {
      fontWeight: HEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "1.45rem",
    },
    h5: {
      fontWeight: SUBHEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "1.35rem",
    },
    h6: {
      fontWeight: SUBHEADER_FONT_WEIGHT,
      fontFamily: HEADER_FONT,
      fontSize: "1.25rem",
    },

    subtitle1: {
      fontWeight: SUBTITLE_FONT_WEIGHT,
      fontSize: "1.15rem",
      letterSpacing: SUBTITLE_LETTER_SPACING,
    },

    subtitle2: {
      fontWeight: SUBTITLE_FONT_WEIGHT,
      fontSize: "1.05rem",
      letterSpacing: SUBTITLE_LETTER_SPACING,
    },

    body1: {
      fontSize: "1rem",
    },

    body2: {
      fontSize: ".88rem",
    },

    button: {
      fontFamily: HEADER_FONT,
      height: "100%",
      textTransform: "none",
      fontSize: ".9rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 1,
  },
  palette: {
    grey: GREY,
    // palette values for dark mode
    // some values inverted. not a mistake.
    primary: {
      light: darken(PRIMARY_DARK, 0.2),
      main: PRIMARY_DARK,
      dark: lighten(PRIMARY_DARK, 0.2),
      contrastText: darken(PRIMARY_DARK, 0.9),
    },
    secondary: {
      light: darken(SECONDARY_DARK, 0.2),
      main: SECONDARY_DARK,
      dark: lighten(SECONDARY_DARK, 0.2),
      contrastText: darken(SECONDARY_DARK, 0.9),
    },
    error: {
      light: darken(ERROR_DARK, 0.2),
      main: ERROR_DARK,
      dark: lighten(ERROR_DARK, 0.2),
      contrastText: darken(ERROR_DARK, 0.9),
    },
    warning: {
      light: darken(WARNING_DARK, 0.2),
      main: WARNING_DARK,
      dark: lighten(WARNING_DARK, 0.2),
      contrastText: darken(WARNING_DARK, 0.9),
    },
    success: {
      light: darken(SUCCESS_DARK, 0.2),
      main: SUCCESS_DARK,
      dark: lighten(SUCCESS_DARK, 0.2),
      contrastText: darken(SUCCESS_DARK, 0.9),
    },
    info: {
      light: darken(INFO_DARK, 0.2),
      main: INFO_DARK,
      dark: lighten(INFO_DARK, 0.2),
      contrastText: darken(INFO_DARK, 0.9),
    },
    background: BACKGROUND_DARK,
    text: {
      primary: GREY[100],
      secondary: GREY[400],
      disabled: GREY[700],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        lineHeight: 1.3,
        letterSpacing: 0.5,
      },
    },
    MuiDialog: {
      defaultProps: {
        keepMounted: false,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 2,
          transition: "none",
          color: "white",
          boxShadow:
            "inset 3px 3px 1px 0px rgba(255,255,255,0.7), inset -3px -3px 1px 0px rgba(0,0,0,0.6)",

          "&:hover": {
            boxShadow:
              "inset 3px 3px 1px 0px rgba(255,255,255,0.7), inset -3px -3px 1px 0px rgba(0,0,0,0.6)",
          },
          "&:active": {
            backgroundColor: "white",
            color: "black",
            boxShadow:
              "inset 3px 3px 1px 0px rgba(0,0,0,0.6), inset -3px -3px 1px 0px rgba(203, 203, 203, 0.8)",
          },

          "&:disabled": {
            boxShadow:
              "inset 2px 2px 1px 0px rgba(255,255,255,0.2), inset -2px -2px 1px 0px rgba(0,0,0,0.2)",
            backgroundColor: GREY[700],
            color: GREY[300],
          },
        },
        endIcon: {
          "& >*:nth-of-type(0)": {
            fontSize: "1rem",
          },
          "& >*:nth-of-type(1)": {
            fontSize: "1rem",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(2px) saturate(80%)",
          backgroundColor: alpha(GREY[900], 0.4),
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        component: Box,
      },
      styleOverrides: {
        root: {
          marginTop: 6,
          "& .MuiLinearProgress-root": {
            height: 6,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            transition: "background-color 0.3s ease",
            backgroundImage: "none",
            backdropFilter: "blur(15px) saturate(180%)",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "normal",
        autoComplete: "off",
        fullWidth: true,
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "*": {
            transition: "border-color 0.2s ease",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 8,
        },
        bar: {
          borderRadius: 8,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          code: {
            fontFamily: MONOSPACE_FONT,
          },
          pre: {
            fontFamily: MONOSPACE_FONT,
          },
          "*::selection": {
            color: lighten(PRIMARY_DARK, 0.8),
            backgroundColor: darken(PRIMARY_DARK, 0.3),
          },
          kbd: {
            display: "inline-block",
            margin: "0 .15rem",
            padding: ".05rem .3rem",
            borderRadius: 4,
            backgroundColor: GREY[900],
            boxShadow: `0 2px 0 1px ${GREY[700]}`,
            border: `1px solid ${GREY[500]}`,
            fontFamily: HEADER_FONT,
            fontWeight: HEADER_FONT_WEIGHT,
            textTransform: "lowercase",
          },
          scrollbarColor: "#555",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#666",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#666",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#666",
            },
          "& .MuiInputBase-root": {
            backgroundColor: lighten(BACKGROUND_DARK.default, 0.05),
          },
        },
      },
    },
  },
});
