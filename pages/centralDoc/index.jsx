import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
         Box, Button, Center, FormControl, 
         FormLabel, Grid, GridItem, Input, 
         Select, 
         Table, TableCaption, Tbody, Td, 
         Text, Th, Thead, Tr 
        } from '@chakra-ui/react';
import Section from '../../components/Section'
import SectionContent from '../../components/Section/SectionContent';

const CentralDoc = ({ cities, specialities }) => {
    const [city, setCity] = useState("");
    const [docSpeciality, setDocSpeciality] = useState("");
    const [display, setDisplay] = useState(false);

    // Sets the state with user entered value
    const handleCityInputChange = (event) => {
        setCity(event.target.value);
    }

    // Sets the docSpeciality state with user entered value
    const handleDocSpecialityInputChange = (event) => {
        setDocSpeciality(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(true);
        console.log("Submit was called");
    }
    
    return(
        <>
            <Head>
                <title>
                    Central Doc Search
                </title>
            </Head>
            <Section>
                <SectionContent>
                            {/* To take input of city */}
                            <FormControl>
                                <FormLabel htmlFor='city'>
                                    Enter the City to be searched
                                </FormLabel>
                                <Select
                                    id = "city"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {city}
                                    onChange     = {handleCityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'City'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                >
                                    {cities.map( city =>(
                                        <option
                                            key= {city._id}
                                        >
                                            {city.city}
                                        </option>
                                    ))
                                    }
                                </Select>
                                 {/* To take input of doctors speciality */}
                                 <FormLabel htmlFor='docSpeciality'>
                                    Enter Doctor's Speciality
                                </FormLabel>
                                <Select
                                    id = "docSpeciality"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {docSpeciality}
                                    onChange     = {handleDocSpecialityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'Speciality'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                >
                                    {specialities.map( speciality =>(
                                        <option
                                            key= {speciality._id}
                                        >
                                            {speciality.speciality}
                                        </option>
                                    ))
                                    }
                                </Select>
                                {/* <Input 
                                    id           = "docSpeciality"
                                    // name         = "docSpeciality"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {docSpeciality}
                                    onChange     = {handleDocSpecialityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = "Dr's Speciality"
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                /> */}
                                <Button
                                    type        = "submit"
                                    width       = "xs"
                                    display     = "block"
                                    onClick    = {handleSubmit}
                                    colorScheme = "green"
                                    outline     = "none"
                                >
                                    Submit
                                </Button>
                            </FormControl>
                            {/* Table to display the available doctors in the selected city and speciality */}
                            <Box
                                marginTop = "2em"
                            >
                                <Table 
                                    variant     = "striped"
                                    marginY     = "2em"
                                >
                                    <TableCaption>Showing results for {docSpeciality}(s) in {city}</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Qualification</Th>
                                            <Th>E-Consultation</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>ABXCDDCDC</Td>
                                            <Td>MBBS</Td>
                                            <Td>
                                                <Button
                                                    variant     = "ghost"
                                                    colorScheme = "whatsapp" 
                                                >
                                                    Google meet
                                                </Button>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>ABXCDDCDC</Td>
                                            <Td>MBBS</Td>
                                            <Td>
                                                <Button
                                                    variant     = "ghost"
                                                    colorScheme = "whatsapp" 
                                                >
                                                    Google meet
                                                </Button>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>ABXCDDCDC</Td>
                                            <Td>MBBS</Td>
                                            <Td>
                                                <Button
                                                    variant      = "ghost"
                                                    colorScheme  = "whatsapp" 
                                                    borderRadius = "md "
                                                >
                                                    Google meet
                                                </Button>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default CentralDoc;

export const getServerSideProps = async (context) =>{
    const cityData = await fetch("http://localhost:3000/api/cities");
    const cities = await cityData.json();
    const specialityData = await fetch("http://localhost:3000/api/docSpeciality");
    const specialities = await specialityData.json(); 

    return {
        props: { cities, specialities },
    }
}