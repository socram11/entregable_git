"use client"
import { Avatar, Badge, Button, Flex, VStack, Text, Box } from '@chakra-ui/react'
import React from 'react'


const userProfile = ({userData}:any) => {
  return (
    <>
      <Flex marginY={16} border={"2px solid"} borderColor={"white"} borderRadius={4} padding={8}>
        <VStack gap={5}>
            <Avatar size={'2xl'} src={userData.avatar_url} name={userData.name}></Avatar>
            <Button>
                <a hrefLang={userData.html_url} target="_blank"> </a>
                Ver Perfil
            </Button>
        </VStack>

        <VStack marginLeft={10} alignItems={'self-start'}>
            <Flex gap={4}>
                <Badge fontSize={"0.9em"} colorScheme='pink'>Public Repos: {userData.public_repos}</Badge>
                <Badge fontSize={"0.9em"} colorScheme='pink'>Public Gists: {userData.public_gists}</Badge>
                <Badge fontSize={"0.9em"} colorScheme='pink'>Followers: {userData.followers}</Badge>
                <Badge fontSize={"0.9em"} colorScheme='pink'>Following: {userData.following}</Badge>
            </Flex>

            <Text fontSize={"2xl"} fontWeight={'bold'} marginTop={4} color={'white'}>
                {userData.name}
            </Text>
            <Text fontSize={"md"} fontWeight={'bold'} marginTop={2} color={'gray'}>
                {userData.bio}
            </Text>

            <Box>
                <Text fontSize={"md"} color={"lightgray"}>
                    <Text as={"span"} fontWeight={"bold"} color={"white"} marginRight={2}>Company:</Text>
                    {userData.company || "Not Specified"}
                </Text>
                <Text fontSize={"md"} color={"lightgray"}>
                    <Text as={"span"} fontWeight={"bold"} color={"white"} marginRight={2}>Location:</Text>
                    {userData.location || "Not Specified"}
                </Text>
                <Text fontSize={"md"} color={"lightgray"}>
                    <Text as={"span"} fontWeight={"bold"} color={"white"} marginRight={2}>Website:</Text>
                    {userData.blog || "Not Specified"}
                </Text>
                <Text fontSize={"md"} color={"lightgray"}>
                    <Text as={"span"} fontWeight={"bold"} color={"white"} marginRight={2}>Member since:</Text>
                    {userData.created_at || "Not Specified"}
                </Text>
            </Box>
        </VStack>
      </Flex>

      
    </>
  )
}

export default userProfile
