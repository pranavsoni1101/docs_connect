import { Container } from '@chakra-ui/layout';
import React from 'react';

const ResponsiveContainer = ({children}) => {
    return(
        <Container maxW={['95%', '90%', '85%', '90%', '85%', '75%']} transition=" 0.4s ease-in-out">
            {children}
        </Container>
    )
}

export default ResponsiveContainer;