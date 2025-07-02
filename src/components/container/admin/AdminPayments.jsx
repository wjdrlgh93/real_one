import React, { useEffect, useState } from 'react'


const AdminPayments = () => {

    // CurrentPage


    return (
        <>
            <h1 className='pay_title'>결제페이지</h1>
            <div className='pay-container'>
                <div className="pay-container-con">
                    <table className="paymentlist">
                        <tbody>
                            <tr>
                                <th>결제일</th>
                                <th>주문처</th>
                                <th>주문방식</th>
                                <th>결제방식</th>
                                <th>결제ID</th>
                                <th>주소</th>
                                <th>보기</th>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default AdminPayments