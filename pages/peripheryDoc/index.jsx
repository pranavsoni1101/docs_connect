import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Section from '../../components/Section'
import SectionContent from '../../components/Section/SectionContent';

const peripheryDoc = () => {

    // All the states are declared below
    const [docs, setDocs] = useState([]);
    const [village, setVillage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Sets the state with user entered value
    const handleVillageInputChange = (event) => {
        setVillage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getDocs();
        setIsSubmitted(true);
    }

    // Fetches doctor details from the db
    const getDocs = async () => {
        axios.get(`http://localhost:3000/api/peripheryDoc/${village}`)
        .then((data) =>{
            setDocs(data.data)
        })
        .catch((err) => console.log(err))
    }

    const isError = village === "" ? true : false;

    return(
        <>
            <Section>
                <SectionContent>
                            {/* To take input of city */}
                            <FormControl isRequired>
                                <FormLabel htmlFor='village'>
                                    Enter the village to be searched
                                </FormLabel>
                                <Input 
                                    id           = "village"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {village}
                                    onChange     = {handleVillageInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'Village'
                                    autoComplete = "off"
                                    marginBottom = "1em"
                                />
                                <Button
                                    type        = "submit"
                                    width       = "xs"
                                    outline     = "none"
                                    display     = "block"
                                    onClick     = {handleSubmit}
                                    isDisabled  = {isError}
                                    colorScheme = "green"
                                >
                                    Submit
                                </Button>
                            </FormControl>
                            {/* Table to display the available doctors in the selected village and speciality */}
                            { isSubmitted && (<Box
                                marginTop = "2em"
                            >
                                <Table 
                                    variant     = "striped"
                                    marginY     = "2em"
                                >
                                    <TableCaption>Showing results for doctors in {village}</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Qualification</Th>
                                            <Th>Contact Number</Th>
                                            <Th>E-Consultation</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {docs.map(doc => (
                                            <Tr key={doc._id}>
                                                <Td textTransform="capitalize">
                                                    {doc.name}
                                                </Td>
                                                <Td textTransform="capitalize">
                                                    {doc.qualification}
                                                </Td>
                                                <Td>
                                                    +91{doc.phnumber}
                                                </Td>
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
                            </Box>)  }  
                </SectionContent>
            </Section>
        </>
    )
}

export default peripheryDoc;