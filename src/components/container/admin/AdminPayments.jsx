import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


const AdminPayments = () => {

    const [payListObj, setPayListObj] = useState({}) // Object init
    const [paymentList, setPaymentList] = useState([])
    const [selectedPay, setSelectedPay] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);


    const modalBackground = useRef();

    useEffect(() => {
        const onPayMentListfn = async (id) => {
            // get Payment info 
            const dataURL = `http://localhost:3001/orders`
            try {
                const res = await axios.get(`${dataURL}`)
                const res2 = await axios.get(`${dataURL}?id=${id}`)

                setPaymentList(res.data)
                setPayListObj(res2.data[0])

                console.log(payListObj)


            } catch (err) {
                alert(err)
            }
        }
        onPayMentListfn()
    }, [])

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
                                <th>결제방식</th>
                                <th>결제ID</th>
                                <th>주소</th>
                                <th>보기</th>
                            </tr>
                            {
                                paymentList && paymentList.map((el, idx) => {
                                    return (
                                        <tr>
                                            <td>{el.date}</td>
                                            <td>{el.shop}</td>
                                            <td>{el.paymentMethod}</td>
                                            <td>{el.id}</td>
                                            <td>{el.orderer.address}</td>
                                            <td className={'modal-td'}
                                                onClick={() => {
                                                    setModalOpen(true)
                                                    setSelectedPay(el)
                                                    // mapRef.current.relayout();
                                                }}>Detail</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        modalOpen && selectedPay &&
                        <div className={'modal-container'} ref={modalBackground} onClick={e => {
                            if (e.target === modalBackground.current) {
                                setModalOpen(false);

                            }
                        }}>
                            <div className={'modal-content'}>
                                <div className={'memInfo'}> === 결제 상세보기 ===</div>

                                <div>test: {selectedPay.id}</div>


                                <button className={'modal-close-btn'} onClick={() => {
                                    setModalOpen(false);
                                }}>
                                    닫기
                                </button>

                            </div>
                        </div >
                    }
                </div>


            </div>
        </>
    )
}

export default AdminPayments