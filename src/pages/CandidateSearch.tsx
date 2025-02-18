import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { searchGithub, searchGithubUser } from '../api/API';
import CandCard from '../components/candidateCard';
import Candidate from '../interfaces/Candidate.interface';
import 'react-toastify/dist/ReactToastify.css';

const CandidateSearch = () => {
  const [selectedCand, setSelectedCand] = useState<Candidate | null>(null);

  useEffect(() => {
    loadData()
  }, []);

  const getCandidates = async () => {
    try {
      const candList = await searchGithub();
      if (candList.length > 0) {
        const candInfo = await searchGithubUser(candList[0].login);
        if (candInfo) {
          setSelectedCand(candInfo);
          console.log(candInfo);
          return;
        } else {
          console.error('Candidate not found!');
          return;
        }
      } else {
        console.error('No candidates found on GitHub');
        setSelectedCand(null);
        return;
      }
    } catch (err: any) {
      console.error('Error getting candidates: ', err)
    }
  }

  const loadData = async function () {
    toast.dismiss();
    await toast.promise(
      getCandidates,
      {
        pending: 'Getting candidate...',
        success: 'Candidate retrieved!',
        error: 'There was an error getting candidates...'
      }
    );
  }

  function saveCandidate() {
    const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    savedCandidates.push(selectedCand);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    loadData();
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
      />
      <h1>Candidate Search</h1>
      {selectedCand && (
        <CandCard
          cand={selectedCand}
          approve={saveCandidate}
          deny={loadData}
        />)}
    </div>
  )
};

export default CandidateSearch;
