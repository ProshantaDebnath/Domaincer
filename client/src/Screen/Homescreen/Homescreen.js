import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../../actions/jobActions'
import Jobs from '../../Components/Jobs/Jobs'
import './Homescreen.css'
//import jobs from '../../jobs'

export default function Homescreen() {

    const dispatch = useDispatch()

    const jobsstate = useSelector(state => state.getAllJobsReducer)

    const { jobs, error, loading } = jobsstate

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])

    return (
        <div>
            <div className="row">

                {loading ? (
                    <h1 className='loading'>Loading...</h1>
                ) : error ? (
                    <h1 className='error'>Something Went Wrong</h1>
                ) : (

                    jobs.map(job => {
                        return <div className="col-md-4">
                            <div>
                                <Jobs job={job} />
                            </div>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}
