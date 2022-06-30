import '../styles/globals.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Layout from '../components/Layout';
// custom theme
import theme from '../theme/theme';

const MyApp = ({Component}) => {
    return(
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Layout>
                    <Component/>
                </Layout>
            </ChakraProvider>
    )
}

export default MyApp;