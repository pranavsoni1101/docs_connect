import '../styles/globals.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import Layout from '../components/Layout';
// custom theme
import theme from '../theme/theme';

const MyApp = ({Component, pageProps}) => {
    return(
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp;