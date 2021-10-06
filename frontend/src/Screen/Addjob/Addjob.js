import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addjob } from '../../actions/jobActions';

export default function Addjob() {


    const [position, setposition] = useState('')
    const [experience, setexperience] = useState('')
    const [skill, setskill] = useState('')
    const [image, setimage] = useState('')


    const dispatch = useDispatch()

    // const jobsstate = useSelector(state => state.getAllJobsReducer)

    // const { jobs, error, loading } = jobsstate


    function formHandler(e) {
        e.preventDefault();

        const job = {
            position,
            experience,
            skill,
            image
        }
        console.log(job)
        dispatch(addjob(job))
    }

    return (
        <div>

            <div className='text-left shadow p-3 mb-5 bg-white rounded table-responsive-sm'>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Add New One</h2>

                {/* {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {success && (<Success success='Added Successfully' />)} */}

                <form onSubmit={formHandler}>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Position'
                        value={position}
                        onChange={(e) => {
                            setposition(e.target.value)
                        }} />

                    <input
                        className='form-control'
                        type='text'
                        placeholder='Experience '
                        value={experience}
                        onChange={(e) => {
                            setexperience(e.target.value)
                        }} />

                    <input
                        className='form-control'
                        type='text'
                        placeholder='Skill'
                        value={skill}
                        onChange={(e) => {
                            setskill(e.target.value)
                        }} />

                    <input
                        className='form-control'
                        type='text'
                        placeholder='image Url'
                        value={image}
                        onChange={(e) => {
                            setimage(e.target.value)
                        }} />

                    <button className='btn mt-3 btn-danger' type='submit'>Add Job</button>

                </form>
            </div>

        </div>
    );
}