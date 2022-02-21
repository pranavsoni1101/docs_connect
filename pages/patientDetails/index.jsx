import React from 'react';
import { FormControl, FormLabel, Input, Button, Grid, GridItem, Heading, RadioGroup, Radio, HStack, Textarea } from '@chakra-ui/react';
import Section from '../../components/Section';
import SectionContent from '../../components/Section/SectionContent';
import { useState } from 'react/cjs/react.development';

const Patient = () => {

    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        lastName: "",
        age: "",
        sex: "M",
        complaint: "",
        medicalHist: "",
        surgicalHist: "",
        menstrualPeriod: "",
    })

    const handleChange = (event) => {
        setPatientInfo({
            ...patientInfo,
            [event.target.name] : event.target.value
        })
    }

    return(
        <>
            <Section>
                <SectionContent>
                    <Heading
                        size            = "md"
                        marginBottom = "1em"
                    >
                        Enter Patient Details
                    </Heading>
                    <FormControl>
                        <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                        >
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='first-name'>
                                  First Name
                                </FormLabel>
                                <Input 
                                    id            = "first-name"
                                    name          = "firstName"
                                    type          = "text"
                                    value         = {patientInfo.firstName}
                                    onChange      = {handleChange}
                                    marginTop     = "4px"
                                    placeholder   = 'First Name'
                                    autoComplete  = "off"
                                    marginBottom  = "1em"
                                    textTransform = "capitalize"
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='last-name'>
                                  Last Name
                                </FormLabel>
                                <Input 
                                    id            = "last-name"
                                    name          = "lastName"
                                    type          = "text"
                                    value         = {patientInfo.lastName}
                                    onChange      = {handleChange}
                                    marginTop     = "4px"
                                    placeholder   = 'Last Name'
                                    autoComplete  = "off"
                                    marginBottom  = "1em"
                                    textTransform = "capitalize"
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='age'>
                                    Age
                                </FormLabel>
                                <Input 
                                    id            = "age"
                                    name          = "age"
                                    type          = "text"
                                    value         = {patientInfo.age}
                                    onChange      = {handleChange}
                                    marginTop     = "4px"
                                    placeholder   = 'Age'
                                    autoComplete  = "off"
                                    marginBottom  = "1em"
                                    textTransform = "capitalize"
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='sex'>
                                    Sex
                                </FormLabel>
                                {/* State needs to be worked upon */}
                                <RadioGroup
                                    id       = 'sex'
                                    name     = 'sex'
                                    value    = {patientInfo.sex}
                                    onChange = {handleChange}
                                >
                                    <HStack spacing= "12px">
                                        <Radio value = {"M"}>Male</Radio>
                                        <Radio value = {"F"} >Female</Radio>
                                    </HStack>
                                </RadioGroup>
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='chief-complaint'>
                                    Chief Compalaint
                                </FormLabel>
                                <Textarea 
                                    id    = 'chief-complaint'
                                    name  = 'complaint'
                                    value ={patientInfo.complaint}
                                    onChange={handleChange}
                                    placeholder = "What is the patient's chief complaint? "
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='medical-history'>
                                    Medical History
                                </FormLabel>
                                <Textarea 
                                    id    = 'medical-history'
                                    name  = 'medicalHist'
                                    value ={patientInfo.medicalHist}
                                    onChange={handleChange}
                                    placeholder = "Patient's medical history, if any... "
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='surgical-history'>
                                    Surgical History
                                </FormLabel>
                                <Textarea 
                                    id    = 'surgical-history'
                                    name  = 'surgicalHist'
                                    value ={patientInfo.surgicalHist}
                                    onChange={handleChange}
                                    placeholder = "Patient's surgical history, if any..."
                                />
                            </GridItem>
                            <GridItem
                                colSpan={6}
                            >
                                <FormLabel htmlFor='menstrual-period'>
                                    Menstrual Period
                                </FormLabel>
                                <Textarea 
                                    id    = 'menstrual-period'
                                    name  = 'menstrualPeriod'
                                    value ={patientInfo.menstrualPeriod}
                                    onChange={handleChange}
                                    placeholder = "Patient's medical history, if any..."
                                />
                            </GridItem>
                            <GridItem
                                colSpan={4}
                            >
                                <Button
                                    colorScheme = "green"
                                    width       = "100%"
                                >
                                    Submit
                                </Button>
                            </GridItem>
                        </Grid>
                    </FormControl>
                </SectionContent>
            </Section>
        </>
    )
}

export default Patient;