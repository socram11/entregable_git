
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import { Container, Text } from '@chakra-ui/react';
import SearchBar from './components/searchBar';
import UserProfile from './components/userProfile';
import RepoList from './components/RepoList';

const Home: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container maxWidth={'container.lg'}>
      <Navbar />
      <Text textAlign={'center'} fontSize={'2xl'} padding={8}>
        Search on GitHub
      </Text>
      <SearchBar setUserData={(res) => setUserData(res)} setLoading={setLoading} />

      {userData ? (
        <UserProfile userData={userData} />
      ) : (
        <RepoList />
      )}

      
      <Link to="/admin">Go to Admin Page</Link>
    </Container>
  );
};  

export default Home;