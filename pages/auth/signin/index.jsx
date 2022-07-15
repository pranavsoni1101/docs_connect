import { useState } from "react";
import { Box, Center, FormControl, 
         FormLabel, Heading, Input,
         InputGroup, InputRightElement, Button, 
         VStack, Text
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Section from '../../../components/Section';
import SectionContent from '../../../components/Section/SectionContent';
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

const SignIn = () => {

    const router = useRouter();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/api/login", {
            email: state.email,
            password: state.password
        })
        .then(response => {
            router.push("/")
        })
        .catch(error=> console.log("oops login error: ", error))
    }

    const inputType = state.show ? 'text' : 'password';

    return(
        <>
            <Head>
                <title>Sign In</title>
            </Head>
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
                                Log In 
                            </Heading>
                            <FormControl
                                as = "form"
                                method="post"
                                action="/api/auth/callback/credentials"
                            >
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
                                    onClick      = {handleSubmit}
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
                                    Don't have an account? 
                                    <Text
                                        as         = {Link}
                                        color      = "blue.800"
                                        textDecoration= "underline"
                                        href       = "/auth/signup"
                                        marginLeft = "4px"
                                    >
                                        Sign Up
                                    </Text>
                            </Box>
                        </Box>
                    </Center>
                </SectionContent>
            </Section>
        </>
    )
}

export default SignIn;