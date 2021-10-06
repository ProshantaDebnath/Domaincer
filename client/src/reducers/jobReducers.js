
export const getAllJobsReducer = (state = { jobs: [] }, action) => {

    switch (action.type) {
        case 'GET_JOBS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_JOBS_SUCCESS': return {
            loading: false,
            jobs: action.payload
        }
        case 'GET_JOBS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}



export const addJobReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_JOB_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_JOB_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_JOB_FAILED': return {
            error: action.payload, 
            loading: false,
        }
        default: return state
    }
}
