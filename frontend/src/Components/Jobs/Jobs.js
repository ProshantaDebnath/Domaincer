import React from 'react';
import './Jobs.css';

export default function Jobs({job}) {
    return (
        <div style={{margin:'50px'}} className="shadow-lg p-4 mb-5 bg-white rounded">
            <h1>{job.position}</h1>
            <img src={job.image} className="img-fluid" style={{height:'200px'}} alt="job image" />

            <div className="flex-container">
                <div className='w-100' style={{textAlign:'center'}}>
                    <p>Experience : {job.experience}</p>
                </div>
            </div>
            <h3>Skill Required :{job.skill}</h3>
            <a href="www.google.com" className="btn btn-danger a-button" role="button">Apply Now</a>

        </div>
    )
}
