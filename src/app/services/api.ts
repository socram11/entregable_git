import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; 

export const getRepos = async () => {
  try {
    const response = await axios.get(`${API_URL}/repos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRepo = async (repoData: any) => {
  try {
    const response = await axios.post(`${API_URL}/repos`, repoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRepo = async (repoId: string, updatedData: any) => {
  try {
    const response = await axios.put(`${API_URL}/repos/${repoId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRepo = async (repoId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/repos/${repoId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const createUsers = async (userData: any) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateUsers = async (userId: string, updatedData: any) => {
    try {
      const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteUsers = async (userId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  