import React from 'react';
import { Center, Box, Heading, 
         FormControl, FormLabel, Input, 
         InputGroup, InputRightElement, Button,
         Text 
    } from '@chakra-ui/react';
import Section from '../Section';
import SectionContent from '../Section/SectionContent';

const UserDetails = ({state, nextStep, handleInputChange, inputType, handlePasswordShow}) => {

    const Next = (event) => {
        event.preventDefault();
        nextStep();
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
                               User Details
                            </Heading>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input 
                                    id           = "email"
                                    name         = "email"
                                    type         = "email"
                                    value        = {state.email}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'Enter email'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
                               <FormLabel htmlFor="password">Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        id           = "password"
                                        type         = {inputType}
                                        name         = "password"
                                        value        = {state.password}
                                        variant      = "filled"                                    
                                        onChange     = {handleInputChange}
                                        placeholder  = 'Enter password'
                                        marginBottom = "1em"
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button 
                                            size    = 'xs' 
                                            onClick = {handlePasswordShow}
                                        >
                                            {state.show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormLabel htmlFor="repassword">Repeat Password</FormLabel>
                                <Input
                                    id           = "repassword"
                                    type         = "password"
                                    name         = "repassword"
                                    value        = {state.repassword}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'Re-enter password'
                                    marginBottom = "1em"
                                />
                                <Button
                                    type         = "submit"
                                    width        = "100%"
                                    onClick      = {Next}
                                    colorScheme  = "green"
                                >
                                    Next
                                </Button>
                            </FormControl>
                            <Box
                                marginTop = "1em"
                                textAlign = "center"
                            >
                                    Already have an account? 
                                    <Text
                                        as         = "a"
                                        color      = "blue.800"
                                        textDecoration= "underline"
                                        href       = "/login"
                                        marginLeft = "4px"
                                    >
                                        Log in
                                    </Text>
                            </Box>
                        </Box>
                    </Center>
                </SectionContent>
            </Section>
        </>
    )
}

export default UserDetails;