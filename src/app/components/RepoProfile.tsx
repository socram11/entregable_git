import React from 'react';
import { Flex, VStack, Badge, Text, Link } from '@chakra-ui/react';

const RepoProfile = ({ repoData }: any) => {
  return (
    <Flex marginY={16} border={"2px solid"} borderColor={"white"} borderRadius={4} padding={8}>
      <VStack gap={5}>
        <Badge fontSize={"0.9em"} colorScheme='pink'>Private: {repoData.private ? 'Yes' : 'No'}</Badge>
        <Badge fontSize={"0.9em"} colorScheme='pink'>Languages: {repoData.languages_url}</Badge>
        {/* Add more badges or information based on your requirements */}
      </VStack>

      <VStack marginLeft={10} alignItems={'self-start'}>
        <Text fontSize={"2xl"} fontWeight={'bold'} marginTop={4} color={'white'}>{repoData.name}</Text>
        <Text fontSize={"md"} fontWeight={'bold'} marginTop={2} color={'gray'}>{repoData.description || 'No description available'}</Text>
        <Link href={repoData.html_url} target="_blank" color="purple.500">View on GitHub</Link>
      </VStack>
    </Flex>
  );
};

export default RepoProfile;