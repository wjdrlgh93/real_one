import axios from 'axios'
import React from 'react'

const API_SERVER_URL = 'http://localhost:3000/members'

export const getMemberSelectorApi = async () => {
    try {
        const ServerURL = await axios.get(`${API_SERVER_URL}`)

        console.log(typeof ServerURL, ServerURL) // search 
        console.log(typeof ServerURL.data, ServerURL.data) // search 
        return ServerURL.data
    } catch (err) {
        alert(err)
    }
}

export const insertMemberApi = async (user) => {
    try {
        const ServerURLForJoin = await axios.get(`${API_SERVER_URL}`, user) // join
        console.log(`Insert -> ` + ServerURLForJoin)
        return ServerURLForJoin
    } catch (err) {
        alert(err)
    }
}


export default authAPI