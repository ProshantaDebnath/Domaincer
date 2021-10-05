
export const getAllJobsReducer = (state = { }, action) => {

    switch (action.type) {
        case 'GET_JOBS_REQUEST': return {
            ...state
        }
        case 'GET_JOBS_SUCCESS': return {
            jobs: action.payload
        }
        case 'GET_JOBS_FAILED': return {
            error: action.payload
        }
        default: return state
    }
}
