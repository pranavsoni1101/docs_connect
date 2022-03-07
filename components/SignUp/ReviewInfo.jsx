import React from 'react';
import { Box, Center, Button,
         Heading, Text, Stack, HStack, 
    } from '@chakra-ui/react';
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';

const ReviewInfo = ({ prevStep, handleSubmit, state }) => {

    const Previous = (event) => {
        event.preventDefault();
        prevStep();
    } 

    return(
        <>
            <Section>
                <SectionContent>
                    <Center>
                        <Box
                            width        = "md"
                            padding      = "1em"
                            boxShadow    = "md"
                            borderRadius = "lg"
                        >
                            <Heading
                                size         = "lg"
                                color        = "brand1.500"
                                textAlign    = "center"
                                marginBottom = "1em"
                            >
                               Review Info
                            </Heading>
                            <Stack
                                marginBottom= "1em"
                                spacing={3}
                            >
                                    {/* Displays Name */}
                                    <Box>
                                        <Text
                                            display= "inline-block"
                                            marginRight= "8px"
                                        >
                                            Name: 
                                        </Text>
                                        <Text
                                            display="inline-block"
                                            textTransform= "capitalize"
                                        >
                                            {state.name}
                                        </Text>
                                    </Box>
                                    {/* Displays Qualification */}
                                    <Box>
                                        <Text
                                            display= "inline-block"
                                            marginRight= "8px"
                                        >
                                            Qualification: 
                                        </Text>
                                        <Text
                                            display="inline-block"
                                            textTransform= "uppercase"
                                        >
                                            {state.qualification}
                                        </Text>
                                    </Box>
                                    {/* Displays Speciality */}
                                    <Box>
                                        <Text
                                            display= "inline-block"
                                            marginRight= "8px"
                                        >
                                            Specialization: 
                                        </Text>
                                        <Text
                                            display="inline-block"
                                            textTransform= "capitalize"
                                        >
                                            {state.specialization}
                                        </Text>
                                    </Box>
                                    {/* Displays email */}
                                    <Box>
                                        <Text
                                            display= "inline-block"
                                            marginRight= "8px"
                                        >
                                            Email: 
                                        </Text>
                                        <Text
                                            display="inline-block"
                                        >
                                            {state.email}
                                        </Text>
                                    </Box>
                            </Stack>
                            <HStack>
                                <Button
                                    width        = "100%"
                                    onClick      = {Previous}
                                    colorScheme  = "green"
                                >
                                    Previous
                                </Button>
                                <Button
                                    type         = "submit"
                                    width        = "100%"
                                    onClick      = {handleSubmit}
                                    colorScheme  = "green"
                                >
                                    Submit
                                </Button>
                            </HStack>
                        </Box>
                    </Center>
                </SectionContent>
            </Section>
        </>
    )
}

export default ReviewInfo;