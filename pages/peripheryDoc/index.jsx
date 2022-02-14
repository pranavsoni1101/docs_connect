import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Section from '../../components/Section'
import SectionContent from '../../components/Section/SectionContent';

const City = () => {
    const [village, setVillage] = useState("");
    const [display, setDisplay] = useState(false);

    // Sets the state with user entered value
    const handleCityInputChange = (event) => {
        setVillage(event.target.value);
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
            <Section>
                <SectionContent>
                            {/* To take input of city */}
                            <FormControl>
                                <FormLabel htmlFor='village'>
                                    Enter the village to be searched
                                </FormLabel>
                                <Input 
                                    id           = "village"
                                    // name         = "village"
                                    type         = "text"
                                    width        = "50%"
                                    value        = {village}
                                    onChange     = {handleCityInputChange}
                                    marginTop    = "4px"
                                    placeholder  = 'Village'
                                    autoComplete = "off"
                                    marginBottom = "1em"
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
                            {/* Table to display the available doctors in the selected village and speciality */}
                            <Box
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
                                        <Tr>
                                            <Td>ABXCDDCDC</Td>
                                            <Td>MBBS</Td>
                                            <Td>+91-xxxxx-xxxxx</Td>
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
                                            <Td>+91-xxxxx-xxxxx</Td>
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
                                            <Td>+91-xxxxx-xxxxx</Td>
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

export default City;