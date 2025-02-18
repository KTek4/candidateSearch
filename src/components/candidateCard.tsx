import type Candidate from "../interfaces/Candidate.interface";
import { Link } from 'react-router-dom';

type CandidateProps = {
    cand: Candidate;
    approve: () => void;
    deny: () => void;
}

export default function CandCard({ cand, approve, deny }: CandidateProps) {

    // return the candidate card to display on page
    return (
        <div className="cand-card-container">
            {/* first check if a candidate ID exist */}
            {cand.id ? (
                <>
                    <div className='cand-card'>
                        <img src={cand.avatar_url !== null ? cand.avatar_url : ''} alt="candidate avatar"></img>
                        <div className="cand-card-info">
                            <a href={cand.html_url}><h2>{cand.name ? `${cand.name} (${cand.login})` : cand.login}</h2></a>
                            <p>Location: {cand.location ? cand.location : 'N/A'}</p>
                            <p>Email: {cand.email ? (<a href={`mailto:${cand.email}`}>{cand.email}</a>) : 'N/A'}</p>
                            <p>Company: {cand.company ? cand.company : 'N/A'}</p>
                            <p>Bio: {cand.bio ? cand.bio : 'N/A'}</p>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className='approval-button button-minus' onClick={deny}>-</button><button className="approval-button button-plus" onClick={approve}>+</button>
                    </div>
                </>
            )
                :
                // if no candidate ID is given, return a message that there are no more candidates and allow user to travel to saved candidates page
                (
                    <>
                        <div className="cand-card">
                            <div className="cand-card-info">
                                <h2>No additional candidates to view!</h2>
                            </div>
                        </div><br />
                        <Link to="/SavedCandidates">
                            <button className="cand-link-button">View Saved Candidates</button>
                        </Link>
                    </>
                )
            }
        </div>
    )
}