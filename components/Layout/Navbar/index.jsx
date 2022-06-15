import {
    Box, Flex, Heading, HStack,
    useDisclosure,Image, IconButton,
    Button, Stack, Menu, MenuList, MenuItem, MenuButton
} from '@chakra-ui/react';
import {IoMdArrowDropdown} from "react-icons/io"
import NextLink from 'next/link';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

// import NavLogo from '../../../public/svg/whiteLogo.svg';
import NavLink from './NavLink';
import ResponsiveContainer from '../ResponsiveContainer';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMenuOpen = isOpen ? onClose : onOpen;
    return(
        <>
            <Box
                as= "header"
                py = {4}
                width = "100%"
                shadow ="md"
                // position = "absolute"
                bg = "#fff"
                // zIndex= "2"
                top = "0"
            >
                <ResponsiveContainer>
                    <Flex alignItems="center" justifyContent="space-between">
                        <NextLink href= "/">
                            <Heading
                                size          = "md"
                                fontWeight    = "bold"
                                color         = "brand1.500"
                                cursor        = "pointer"
                                textTransform = "uppercase"
                            >
                                DocsConnect
                            </Heading>
                        </NextLink>
                        <HStack 
                            as      = "nav" 
                            spacing = {10} 
                            display = {{ base: 'none', xl: 'flex' }}>
                            <NavLinks />
                        </HStack>
                        <IconButton 
                            isRound
                            bg           = "inherit"
                            paddingLeft  = "11px"
                            fontSize     = "1.5em"
                            size         = "lg"
                            color        = "#000"
                            aria-label   = "Navigation Menu Button"
                            display      = {{ xl: 'none' }}
                            onClick      = {isMenuOpen}
                            _focus       = {{
                                // bg: "none",
                                border: "none"
                            }}
                            icon         = {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                        /> 
                    </Flex>
                    {isOpen ? (
                        <Box
                            py={4}
                            textAlign="center"
                            display = {{xl: "none"}}
                        >
                            <Stack as="nav">
                                <NavLinks />
                            </Stack>
                        </Box>
                    ): null}
                </ResponsiveContainer>
            </Box>
        </>
    )
}

const NavLinks = () => {
    return (
        <>
            <NavLink to="/">
                <span>
                    Home
                </span>
            </NavLink>
            <NavLink to="/peripheryDoc">
                <span>
                    PeripheryDoc
                </span>
            </NavLink>
            <NavLink to="/centralDoc">
                <span>
                    CentralDoc
                </span>
            </NavLink>
            <Menu isLazy>
                <MenuButton
                    size          = "md"
                    // fontWeight    = "bold"
                    color         = "brand1.500"
                    cursor        = "pointer"
                    textTransform = "uppercase"
                >
                    Profile
                </MenuButton>
                <MenuList>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
                <NavLink to="/auth/signin">
                <span>
                    Sign In
                </span>
            </NavLink>
            <NavLink to="/auth/signup">
                <span>
                    Sign up
                </span>
            </NavLink>
            </Menu>   
        </>
    )
}

export default Navbar;