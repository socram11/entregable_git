import React, { useEffect, useState } from 'react';
import { getUsers, createUsers, updateUsers, deleteUsers } from '../services/api';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async (newUserData: any) => {
    try {
      const createdUser = await createUsers(newUserData);
      setUsers([...users, createdUser]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdateUser = async (userId: string, updatedData: any) => {
    try {
      const updatedUser = await updateUsers(userId, updatedData);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? updatedUser : user))
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUsers(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      {/* Render your user list and use create, update, delete handlers */}
    </div>
  );
};

export default UserList;