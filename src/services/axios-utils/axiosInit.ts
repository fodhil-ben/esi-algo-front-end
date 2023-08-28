import axios from "axios";

export const BASE_URL = 'https://algo-api.onrender.com'
// export const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'


export const problemSets = axios.create({
    baseURL: BASE_URL
})

export const getProblemSets = async () => {
    const response = await problemSets.get('/problem-set/td/all', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmb2RoaWwiLCJleHAiOjE2OTMxNTA4MTR9.mKbB3XLFM9MJqnklLjDza-XAnqtFLO_FtzWl4e9uvmE`
        }
    })
    // const response = await problemSets.get('/')
    return response.data
}

export const getTdById = async (td_id: number) => {
    const response = await problemSets.get(`/problem-set/exo/${td_id}`, {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmb2RoaWwiLCJleHAiOjE2OTMxNTA4MTR9.mKbB3XLFM9MJqnklLjDza-XAnqtFLO_FtzWl4e9uvmE`
        }
    })
    return response.data
}

