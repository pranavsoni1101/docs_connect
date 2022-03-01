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

const DoctorDetails = () => {

    const [state, setState] = useState({
        name: "",
        city: "",
        email: "",
        password: "",
        show: false
    });

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handlePasswordShow = () => setState({
        ...state, 
        show: !state.show
    })

    const inputType = state.show ? 'text' : 'password';

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
                                <FormLabel htmlFor="city">City</FormLabel>
                                <Input 
                                    id           = "city"
                                    name         = "city"
                                    type         = "text"
                                    value        = {state.city}
                                    variant      = "filled"                                    
                                    onChange     = {handleInputChange}
                                    placeholder  = 'City'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
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
                                <Button
                                    type         = "submit"
                                    width        = "sm"
                                    colorScheme  = "green"
                                >
                                    Submit
                                </Button>
                            </FormControl>
                            <Box
                                textAlign="center"
                                color = "#00000070"
                                marginY= "1em"
                            >
                                OR
                            </Box>
                            <VStack
                                spacing={4}
                            >
                                <Button
                                    fontSize= "1.5em"
                                    width= "sm"
                                >
                                    <FcGoogle />
                                </Button>
                                <Button
                                    fontSize= "1.5em"
                                    width= "sm"
                                    colorScheme= "facebook"
                                >
                                    <FaFacebookF />
                                </Button>
                            </VStack>
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