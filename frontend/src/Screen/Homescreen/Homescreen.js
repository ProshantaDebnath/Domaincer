import React from 'react'
import Jobs from '../../Components/Jobs/Jobs'
import jobs from '../../jobs'

export default function Homescreen() {
    return (
        <div>
            <div className="row">
                {jobs.map(job => {
                    return <div className="col-md-4">
                        <div>
                            <Jobs job={job}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
