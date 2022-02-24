import { useState } from "react";
import { Box, Center, FormControl, 
         FormLabel, Heading, Input,
         InputGroup, InputRightElement, Button,
    } from "@chakra-ui/react";
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';

const LogIn = () => {

    const [state, setState] = useState({
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
                                textAlign    = "center"
                                marginBottom = "1em"
                            >
                                Log In 
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
                                <Button
                                    type        = "submit"
                                    width       = "sm"
                                    colorScheme = "green"
                                >
                                    Submit
                                </Button>
                            </FormControl>
                        </Box>
                    </Center>
                </SectionContent>
            </Section>
        </>
    )
}

export default LogIn;