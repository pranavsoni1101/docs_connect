
import { useState } from 'react';
import { Center, Box, Heading, 
    FormControl, FormLabel, Input, 
    InputGroup, InputRightElement, Button,
    Text, Grid, GridItem
} from '@chakra-ui/react';
import Link from "next/link";
import Section from '../../../components/Section';
import SectionContent from '../../../components/Section/SectionContent';
import Head from 'next/head';
import axios from 'axios';

const LogIn = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        qualification: "",
        specialization: "",
        show: false,
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
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/api/signup", {
            name: state.name,
            email: state.email,
            mobile: state.mobile,
            password: state.password,
            qualification: state.qualification,
            specialization: state.specialization,
        })
        .then(response => console.log("Data sent successfully"))
        .catch(err => console.log("Data error:", err ))
        console.log(state);
    }

    const inputType = state.show ? 'text' : 'password';
    return(
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <Section>
                <SectionContent>    
                    <Heading
                        size         = "lg"
                        color        = "brand1.500"
                        marginBottom = "1em"
                    >
                        Register Yourself
                    </Heading>
                    <form>
                            <Grid
                                templateColumns = "repeat(12, 1fr)"
                                gap={4}
                            >
                                <GridItem
                                    colSpan={6}
                                >
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
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
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
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl>
                                        <FormLabel htmlFor="mobile">Mobile</FormLabel>
                                        <Input 
                                            id           = "mobile"
                                            name         = "mobile"
                                            type         = "text"
                                            value        = {state.mobile}
                                            variant      = "filled"
                                            onChange     = {handleInputChange}                                    
                                            placeholder  = '+91 xxxxx-xxxxx'
                                            autoComplete = "off"
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl>
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
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormControl>
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
                                        />
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormControl>
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
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={4}
                                >
                                    <Button
                                        type        = 'submit'
                                        width       = "100%"
                                        onClick     = {handleSubmit}
                                        colorScheme = "green"
                                    >
                                        Submit
                                    </Button>
                                </GridItem>
                                <GridItem
                                    colSpan  ={4}
                                    colEnd   = {4}  
                                    colStart = {0}
                                >
                                    <Box
                                        display= "inline-block"
                                    >
                                        Already have an account? 
                                        <Link
                                            href= "/auth/signin"
                                        >
                                            <Text
                                                color          = "blue.900"
                                                cursor         = "pointer"
                                                display        = "inline-block"
                                                marginLeft     = "5px"
                                                textDecoration = "underline"
                                            >
                                                Sign in
                                            </Text>
                                        </Link>
                                    </Box>
                                </GridItem>
                            </Grid>
                    </form>
                </SectionContent>
            </Section>
        </>
    )
}

export default LogIn;