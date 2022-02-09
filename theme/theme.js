import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand1: {
            700: '#020210',
            500: '#080A52',
            400: '#212363',
            300: '#393b75',
            100: '#b5b6cb'
        },
        brand2: {
            500: '#EA2188'
        }
    }
});

export default theme;