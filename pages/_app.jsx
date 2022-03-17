import '../styles/globals.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
// custom theme
import theme from '../theme/theme';

const MyApp = ({Component, pageProps}) => {
    return(
        <SessionProvider session = {pageProps.session}>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </ChakraProvider>
        </SessionProvider>
    )
}

export default MyApp;