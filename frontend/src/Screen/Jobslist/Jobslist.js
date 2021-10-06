import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../../actions/jobActions'

export default function Jobslist() {

    const dispatch = useDispatch()

    const jobsstate = useSelector(state => state.getAllJobsReducer)

    const { jobs, error, loading } = jobsstate

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])

    return (
        <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Jobs List</h2>
            {/* {loading && (<Loading />)}
          {error && <Error error='Something went wrong' />} */}

            <table className='table table-light table-striped table-bordered table-responsive-sm'>

                <thead className='thead-dark'>

                    <tr style={{ textAlign: 'center' }} >
                        <th>Postition</th>
                        <th>Experience</th>
                        <th>Skill</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {jobs && jobs.map(job => {

                        return <tr>
                            <td style={{ textAlign: 'center' }}>{job.position}</td>
                            <td style={{ textAlign: 'center' }}>{job.experience}</td>
                            <td style={{ textAlign: 'center' }}>{job.skill}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button className='m-2'
                                    style={{ color: 'white', background: 'red', textAlign: 'center' }}
                                    onClick={() => { dispatch((job._id)) }}>
                                    Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
