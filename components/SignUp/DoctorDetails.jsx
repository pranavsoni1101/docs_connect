import { useState } from "react";
import { Box, Center, FormControl, 
         FormLabel, Heading, Input,
         InputGroup, InputRightElement, Button, 
         VStack, Text, HStack
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';
import Link from "next/link";

const DoctorDetails = ({nextStep, state, prevStep,handleInputChange}) => {

    const Next = (event) => {
        event.preventDefault()
        nextStep();
    }
    
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
                               Personal Details
                            </Heading>
                            <form>
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
                                        value        = {state.specialization}
                                        variant      = "filled"                                    
                                        onChange     = {handleInputChange}
                                        placeholder  = 'Enter specialization'
                                        autoComplete = "off"
                                        marginBottom = "1em"
                                    />
                                    <HStack>
                                        <Button
                                            type         = "submit"
                                            width        = "100%"
                                            onClick      = {Previous}
                                            colorScheme  = "green"
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            type         = "submit"
                                            width        = "100%"
                                            onClick      = {Next}
                                            colorScheme  = "green"
                                        >
                                            Next
                                        </Button>
                                    </HStack>
                                </FormControl>
                            </form>
                            <Box
                                marginTop = "1em"
                                textAlign = "center"
                            >
                                    Already have an account? 
                                    <Text
                                        as         = {Link}
                                        color      = "blue.800"
                                        textDecoration= "underline"
                                        href       = "/auth/signin"
                                        marginLeft = "4px"
                                    >
                                        Sign in
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