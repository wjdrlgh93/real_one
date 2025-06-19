import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useNavigate } from 'react-router-dom'

const AdminMembers = () => {

    const [memberList, setMemberList] = useState([])
    const navi = useNavigate()

    useEffect(() => {
        const onAdminMemberListFn = async () => {
            const dataURL = `http://localhost:3000/members`
            try {
                const res = await axios.get(`${dataURL}`)
                setMemberList(res.data)

            } catch (err) {
                alert(err)
            }
        }
        onAdminMemberListFn()
    }, [])
    return (
        // router Linking
        <>
            <div className="admin-memberList">
                <div className="admin-memberList-con">
                    <h1>회원목록</h1>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>userEmail</th>
                            <th>userPw</th>
                            <th>userName</th>
                            <th>age</th>
                            <th>address</th>
                            <th>role</th>
                            <th>보기</th>
                        </tr>
                        {memberList && memberList.map(el => {
                            return (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminMembers