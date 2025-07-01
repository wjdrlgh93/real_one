import React from 'react'


import LinChart from '../../../chart/LinChart';
import PieChart from '../../../chart/PieChart';

// 주석말고 npm install chartjs-2 하세요


const AdminDashBoard = () => {
    return (
        <div className='LineC'>
            <h2>DASHBOARD</h2>
            <div className='LineC-con'>
                카테고리 별 매출
                <LinChart />
            </div>
            <div className="PieChart">
                <div className="PieChart-con">
                    회원 연령별 분포
                    <PieChart />
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard