
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
import Head from 'next/head';

const LogIn = () => {

    const { register, handleSubmit, formState: {errors, isValid}, watch} = useForm();
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

    const onSubmit = data => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <FormControl isInvalid={errors.email }> */}
                            <Grid
                                templateColumns = "repeat(12, 1fr)"
                                gap={4}
                            >
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl isInvalid={errors.name}>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input 
                                            id           = "name"
                                            name         = "name"
                                            type         = "text"
                                            variant      = "filled"                                    
                                            placeholder  = 'Enter your full name'
                                            autoComplete = "off"
                                            {...register('name', {required: true})}
                                        />
                                        {errors.name && errors.name.type === "required" && <FormErrorMessage> Name cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl isInvalid={errors.email}>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input 
                                            id           = "email"
                                            name         = "email"
                                            type         = "email"
                                            variant      = "filled"                                    
                                            placeholder  = 'Enter email'
                                            autoComplete = "off"
        
                                            {...register('email', {
                                                required: "Email cannot be empty",
                                                pattern: /^\S+@\S+$/i
                                            })}
                                        />
                                        {errors.email && errors.email.type === "required" && <FormErrorMessage> Email cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl isInvalid = {errors.mobile}>
                                        <FormLabel htmlFor="mobile">Mobile</FormLabel>
                                        <Input 
                                            id           = "mobile"
                                            name         = "mobile"
                                            type         = "text"
                                            variant      = "filled"                                    
                                            placeholder  = '+91 xxxxx-xxxxx'
                                            autoComplete = "off"
                                            {...register('mobile', {
                                                required: true,
                                                maxLength: 10,
                                                number: true
                                            })}
                                        />
                                        {errors.mobile && errors.mobile.type === "required" && <FormErrorMessage> Mobile cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={6}
                                >
                                    <FormControl isInvalid={errors.qualification}>
                                        <FormLabel htmlFor="qualification">Qualification</FormLabel>
                                        <Input 
                                            id           = "qualification"
                                            name         = "qualification"
                                            type         = "text"
                                            variant      = "filled"                                    
                                            placeholder  = 'Qualification'
                                            autoComplete = "off"
                                            {...register('qualification', {required: true})}
                                        />
                                        {errors.qualification && errors.qualification.type === "required" && <FormErrorMessage> Qualification cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormControl isInvalid={errors.specialization}>
                                        <FormLabel htmlFor="specialization">Specialization</FormLabel>
                                        <Input 
                                            id           = "specialization"
                                            name         = "specialization"
                                            type         = "text"
                                            variant      = "filled"                                    
                                            placeholder  = 'Enter specialization'
                                            autoComplete = "off"
                                            {...register('specialization', {required: true})}
                                        />
                                        {errors.specialization && errors.specialization.type === "required" && <FormErrorMessage> Specialization cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormControl isInvalid={errors.password}>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <InputGroup>
                                            <Input
                                                id           = "password"
                                                type         = {inputType}
                                                name         = "password"
                                                variant      = "filled"                                    
                                                placeholder  = 'Enter password'

                                                {...register('password', {required: true})}
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
                                        {errors.password && errors.password.type === "required" && <FormErrorMessage> Password cannot be empty </FormErrorMessage>}
                                    </FormControl>
                                </GridItem>
                                <GridItem
                                    colSpan={4}
                                >
                                    <Button
                                        type        = 'submit'
                                        colorScheme = "green"
                                        width       = "100%"
                                    >
                                        Submit
                                    </Button>
                                </GridItem>
                            </Grid>
                        {/* </FormControl> */}
                    </form>
                </SectionContent>
            </Section>
        </>
    )
}

export default LogIn;