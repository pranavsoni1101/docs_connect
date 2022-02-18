import React, { useState } from 'react';
import Head from 'next/head';
import {
         Box, Button, FormControl, 
         FormLabel, Input, Table,
         TableCaption, Tbody, Td, 
         Th, Thead, Tr 
        } from '@chakra-ui/react';
import Section from '../../components/Section'
import SectionContent from '../../components/Section/SectionContent';
import axios from 'axios';

const CentralDoc = () => {
    
    // All the states are defined below
    const [city, setCity] = useState("");
    const [docs, setDocs] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [docSpeciality, setDocSpeciality] = useState("");

    // Sets the state with user entered value
    const handleCityInputChange = (event) => {
        setCity(event.target.value);
    }

    // Sets the docSpeciality state with user entered value
    const handleDocSpecialityInputChange = (event) => {
        setDocSpeciality(event.target.value);
    }

    // Makes a call to getDocs on submitting the form
    const handleSubmit = (event) => {
        event.preventDefault();
        getDocs();
        setIsSubmitted(true);
    }

    // Fetches doctor details from the db
    const getDocs = async () => {
        axios.get(`http://localhost:3000/api/centralDoc/${city}/${docSpeciality}`)
        .then((data) =>{
            setDocs(data.data);
        })
        .catch((err) => console.log(err))
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
                                <Input 
                                    id           = "city"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {city}
                                    variant      = "filled"
                                    onChange     = {handleCityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'City'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                    isRequired
                                />
                                 {/* To take input of doctors speciality */}
                                 <FormLabel htmlFor='docSpeciality'>
                                    Enter Doctor's Speciality
                                </FormLabel>
                                <Input 
                                    id           = "docSpeciality"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {docSpeciality}
                                    variant      = "filled"
                                    onChange     = {handleDocSpecialityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'Speciality'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                    isRequired
                                />
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
                            {isSubmitted && (<Box
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
                                        {docs.map((doc) => (
                                            <Tr key={doc._id}>
                                                <Td>{doc.name}</Td>
                                                <Td>{doc.qualification}</Td>
                                                <Td>
                                                    <Button
                                                        variant     = "ghost"
                                                        colorScheme = "whatsapp" 
                                                    >
                                                        Google meet
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>)}
                </SectionContent>
            </Section>
        </>
    )
}

export default CentralDoc;