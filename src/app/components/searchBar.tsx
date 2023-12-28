import React, { useState, useEffect } from 'react';
import { Button, Input, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import UserProfile from './userProfile';
import RepoProfile from './RepoProfile';

const SearchBar = ({ setUserData, setLoading }: any) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('user');
  const [searchData, setSearchData] = useState(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const toast = useToast();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.github.com/${searchType === 'user' ? 'users' : 'repos'}/${query}`);
          setSearchData(response.data);
        } catch (error) {
          console.error('Live search error:', error);
          setSearchData(null);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchData(null);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [query, searchType, setLoading]);

  const handleFetchAndSave = async () => {
    if (!query) {
      toast({
        title: 'Error',
        description: 'Please enter a repository or user to search.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/${searchType === 'user' ? 'users' : 'repos'}/${query}`);
      const saveResponse = await axios.post('http://localhost:3001/api/saveGitHubData', {
        dataType: searchType,
        githubData: response.data,
      });

      console.log(saveResponse.data.message);

      setSearchData(response.data);
      addToSearchHistory(query);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFetchAndSave();
  };

  const addToSearchHistory = (newQuery: string) => {
    setSearchHistory((prevHistory) => Array.from(new Set([newQuery, ...prevHistory])));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search repository or user"
          variant="outline"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="user">User</option>
          <option value="repo">Repository</option>
        </Select>
        <Button
          size="md"
          type="submit"
          backgroundColor="purple"
          marginTop="4"
          disabled={!query}
          opacity={!query ? 0.5 : 1}
        >
          Search
        </Button>
      </form>

      {searchData && (
        <>
          {searchType === 'user' ? (
            <UserProfile userData={searchData} />
          ) : (
            <RepoProfile repoData={searchData} />
          )}
        </>
      )}

      {/* Display search history */}
      <div>
        <h2>Search History:</h2>
        <ul>
          {searchHistory.map((historyItem) => (
            <li key={historyItem}>
              <button onClick={() => setQuery(historyItem)}>{historyItem}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;