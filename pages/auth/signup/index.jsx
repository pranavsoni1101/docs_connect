
import { useState } from 'react';
import { Center, Box, Heading, 
    FormControl, FormLabel, Input, 
    InputGroup, InputRightElement, Button,
    Text, FormErrorMessage, HStack,
    Stack, Grid,    
    GridItem
} from '@chakra-ui/react';
import Link from "next/link";
import { useForm } from 'react-hook-form';
import Section from '../../../components/Section';
import SectionContent from '../../../components/Section/SectionContent';

const LogIn = () => {

    const { register, formState: {errors, isValid}, watch} = useForm();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
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
        console.log("Submit called babe");
        console.log(state);
    }

    const inputType = state.show ? 'text' : 'password';
    return(
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
                    <FormControl>
                        <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                        >
                            <GridItem
                                colSpan={6}
                            >
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
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input 
                                    id           = "email"
                                    name         = "email"
                                    type         = "email"
                                    // value        = {state.email}
                                    variant      = "filled"                                    
                                    // onChange     = {handleInputChange}
                                    placeholder  = 'Enter email'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                    {...register('email', {
                                        required: "Email cannot be empty",
                                        pattern: /^\S+@\S+$/i
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
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
                            </GridItem>
                            <GridItem colSpan={6}>
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
                            </GridItem>
                            <GridItem colSpan={6}>
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
                            </GridItem>
                            <GridItem colSpan={6}>
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
                            </GridItem>
                            <GridItem
                                colSpan={4}
                            >
                                <Button
                                    type        = 'submit'
                                    onClick     = {handleSubmit}
                                    colorScheme = "green"
                                    width       = "100%"
                                >
                                    Submit
                                </Button>
                            </GridItem>
                        </Grid>
                    </FormControl>
                </form>
            </SectionContent>
        </Section>
    )
}

export default LogIn;