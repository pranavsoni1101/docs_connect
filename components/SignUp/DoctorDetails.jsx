import { useState } from "react";
import { Box, Center, FormControl, 
         FormLabel, Heading, Input,
         InputGroup, InputRightElement, Button, 
         VStack, Text
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';

const DoctorDetails = ({nextStep, state, handleInputChange}) => {

    const Next = (event) => {
        event.preventDefault()
        nextStep();
    }

    return(
        <>
            <Section>
                <SectionContent>
                    <Center>
                        <Box
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
                               doc details
                            </Heading>
                            <FormControl>
                            <FormLabel htmlFor="name">Name</FormLabel>
                                <Input 
                                    id           = "name"
                                    name         = "name"
                                    type         = "text"
                                    value        = {state.name}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'Enter your full name'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
                                <FormLabel htmlFor="qualification">Qualification</FormLabel>
                                <Input 
                                    id           = "qualification"
                                    name         = "qualification"
                                    type         = "text"
                                    value        = {state.qualification}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'Qualification'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
                                <FormLabel htmlFor="specialization">Specialization</FormLabel>
                                <Input 
                                    id           = "specialization"
                                    name         = "specialization"
                                    type         = "text"
                                    value        = {state.email}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'Enter specialization'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        id           = "password"
                                        // type         = {inputType}
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
                                            // onClick = {handlePasswordShow}
                                        >
                                            {state.show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Button
                                    type         = "submit"
                                    width        = "sm"
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

export default DoctorDetails;