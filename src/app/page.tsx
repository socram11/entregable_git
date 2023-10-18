
import styles from './page.module.css'
"use client"
import Navbar from './components/Navbar'
import { Container, Text } from '@chakra-ui/react'
import SearchBar from './components/searchBar'
import { useState } from 'react'
import UserProfile from './components/userProfile'



export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(userData);
  return (
   <Container maxWidth={'container.lg'}>
      <Navbar />
      <Text textAlign={"center"} fontSize={"2xl"} padding={8}>
          Search on GitHub
      </Text>
      <SearchBar setUserData={(res) => setUserData(res)} setLoading={setLoading} />

      {userData && <UserProfile userData={userData} />}
   </Container>

   
  )
}
