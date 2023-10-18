"use client"
import React, { useState } from 'react'
import { Button, Input, Toast, useToast, } from '@chakra-ui/react'

const searchBar = ({setUserData, setLoading}: any) => {
    const [query, setQuery] = useState("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;
        setLoading(true);
        setUserData(null);
        try {
          const res = await fetch(`https://api.github.com/users/${query}`);
          const data = await res.json(); 
          
          if (data.message){
            return Toast ({
                title: 'Error',
                description: data.message === "Not Found" ? "User Not Found" : data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
          }
          setUserData(data);
        } catch (error) {
            Toast ({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }finally{
            setLoading(false);
        }
      };
  return (
    <form onSubmit={handleSubmit}> 
      <Input placeholder={"buscar repositorio o usuario"} variant={'outline'} value={query} onChange={(e => setQuery(e.target.value))}></Input>
      <Button size={"md"} type='submit' backgroundColor='purple' marginTop={'4'} disabled={!query} opacity={!query ? 0.5:1}>Search</Button>
    </form>
  )
}

export default searchBar
