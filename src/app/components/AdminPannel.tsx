import React, { useState, useEffect } from 'react';
import { getRepos, createRepo, updateRepo, deleteRepo, getUsers, createUsers, updateUsers, deleteUsers } from '../services/api';

interface RepoData {
  id: number;
  name: string;
  description: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

const AdminPanel: React.FC = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetchRepos();
    fetchUsers();
  }, []);

  const fetchRepos = async () => {
    try {
      const repoData = await getRepos();
      setRepos(repoData);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const userData = await getUsers();
      setUsers(userData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateRepo = async () => {
    try {
      const newRepoData = {
        name: 'New Repository',
        description: 'Description of the new repository',
        // Add other properties as needed
      };

      await createRepo(newRepoData);
      fetchRepos();
    } catch (error) {
      console.error('Error creating repository:', error);
    }
  };

  const handleUpdateRepo = async (repoId: number) => {
    try {
      const updatedRepoData = {
        name: 'Updated Repository',
        description: 'Updated description',
      };

      await updateRepo(repoId.toString(), updatedRepoData);
      fetchRepos();
    } catch (error) {
      console.error('Error updating repository:', error);
    }
  };

  const handleDeleteRepo = async (repoId: number) => {
    try {
      await deleteRepo(repoId.toString());
      fetchRepos();
    } catch (error) {
      console.error('Error deleting repository:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const newUserData = {
        name: 'New User',
        email: 'newuser@example.com',
      };

      await createUsers(newUserData);
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdateUser = async (userId: number) => {
    try {
      const updatedUserData = {
        name: 'Updated User',
        email: 'updateduser@example.com',
      };

      await updateUsers(userId.toString(), updatedUserData);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUsers(userId.toString());
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      {/* UI elements and logic for managing repositories */}
      <div>
        <h3>Repositories</h3>
        <button onClick={handleCreateRepo}>Create Repository</button>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              {repo.name} - {repo.description}
              <button onClick={() => handleUpdateRepo(repo.id)}>Update</button>
              <button onClick={() => handleDeleteRepo(repo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* UI elements and logic for managing users */}
      <div>
        <h3>Users</h3>
        <button onClick={handleCreateUser}>Create User</button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleUpdateUser(user.id)}>Update</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel; 