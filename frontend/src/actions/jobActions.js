import axios from 'axios';

export const getAllJobs = () => async dispatch => {
    dispatch({ type: 'GET_JOBS_REQUEST' })

    try {
        const response = await axios.get('/api/jobs/getjobs')
        console.log(response);
        dispatch({ type: 'GET_JOBS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_JOBS_FAILED', payload: error })
    }

}



export const addjob=(job)=> async dispatch=>{

    dispatch({type: 'ADD_ITEM_REQUEST'})

    try {
        const response = await axios.post('/api/jobs/addjob', {job})
        console.log(response)
        dispatch({type:'ADD_JOB_SUCCESS'})
    } catch (error) {
        dispatch({type : 'ADD_JOB_FAILED', payload : error})
    }

}



export const deletejob = (jobid) => async dispatch =>{

    try {
        const response = await axios.post('/api/jobs/deletejob', {jobid})
        alert('Job deleted successfull')
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error)
        
    }

}