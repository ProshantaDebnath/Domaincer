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