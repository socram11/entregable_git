"use client"
import { Box, Button, Flex } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} paddingTop={10} alignItems={'center'} >
        <Box>
            <Image 
            borderRadius='full'
            boxSize='120px' 
            src="../assets/images/logo.png">
            </Image>
        </Box>
    </Flex>
  )
}

export default Navbar
