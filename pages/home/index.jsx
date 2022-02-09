import { Box, Button, Heading} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';

const Home = () => {
    return (
        <>
            <Head>
                <title>
                    Doc's Connect
                </title>
            </Head>
            <Section>
                <SectionContent>
                    <Box 
                        maxW= "50%"
                    >
                        <Heading
                            marginTop= "3em"
                            marginBottom= "1em"
                        >
                            We at docs connect ......
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec enim nulla. Etiam sit amet velit felis. 
                            <br />
                            Get Started below!
                        </Heading>
                        <Link
                            href='/centralDoc'
                        >
                            <Button
                                size= "lg"
                                colorScheme= "teal"
                                
                            >
                                E-Consultation
                            </Button>
                        </Link>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;