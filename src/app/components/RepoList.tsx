import React, { useEffect, useState } from 'react';
import { getRepos, createRepo, updateRepo, deleteRepo } from '../services/api';

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getRepos();
        setRepos(repos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  const handleCreateRepo = async (newRepoData: any) => {
    try {
      const createdRepo = await createRepo(newRepoData);
      setRepos([...repos, createdRepo]);
    } catch (error) {
      console.error('Error creating repo:', error);
    }
  };

  const handleUpdateRepo = async (repoId: string, updatedData: any) => {
    try {
      const updatedRepo = await updateRepo(repoId, updatedData);
      setRepos((prevRepos) =>
        prevRepos.map((repo) => (repo._id === repoId ? updatedRepo : repo))
      );
    } catch (error) {
      console.error('Error updating repo:', error);
    }
  };

  const handleDeleteRepo = async (repoId: string) => {
    try {
      await deleteRepo(repoId);
      setRepos((prevRepos) => prevRepos.filter((repo) => repo._id !== repoId));
    } catch (error) {
      console.error('Error deleting repo:', error);
    }
  };

  return (
    <div>
      {/* Render your repo list and use create, update, delete handlers */}
    </div>
  );
};

export default RepoList;