import axios from 'axios'

const API_SERVER_URL = 'http://localhost:3000/members'
// const API_SERVER_URL = 'http://localhost:3001/members'

//login
export const getMemberSelectorApi = async () => {
    try {
        const ServerURL = await axios.get(`${API_SERVER_URL}`)
        return ServerURL.data
    } catch (err) {
        alert(err)
    }
}


//join
export const insertMemberApi = async (user) => {
    try {
        const ServerURLForJoin = await axios.get(`${API_SERVER_URL}`, user) // join
        console.log(`Insert -> ` + ServerURLForJoin)
        return ServerURLForJoin
    } catch (err) {
        alert(err)
    }
}