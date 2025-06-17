import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
       <div className="header">
            <div className="nav-top">
                <div className="nav-top-con">

                <h1 className="logo">
                <Link to={'/'}>HOME</Link>
                </h1>
                    <div className="top-gnb">
                        <ul>
                        <li><Link to={'#'}>로그인</Link></li>
                        <li><Link to={'#'}>회원가입</Link></li>
                        <li><Link to={'#'}>주문내역</Link></li>
                        <li><Link to={'#'}>장바구니</Link></li>
                        </ul>
                    </div>   
                </div>
            </div>

            <div className="nav-middle">
                <div className="nav-middle-con">
                <h1 className="logo2">
                    <a href="/" target='self'>
                    <img src="images/logo.png" alt="LOGO" width="300" height="150"/></a>
                </h1>
                </div>
                
            </div>

            <div className="nav-bottom">
                <div className="nav-bottom-con">

                <div className="main-gnb">
                    <ul>
                    <li><Link to={'#'}>사료</Link></li>
                    <li><Link to={'#'}>간식</Link></li>
                    <li><Link to={'#'}>장난감</Link></li>
                    <li><Link to={'#'}>목욕</Link></li>
                    <li><Link to={'#'}>하우스</Link></li>
                    <li><Link to={'#'}>패션</Link></li>
                    
                    </ul>
                </div>
                </div>
            </div>
       </div>
    
    )
}

export default Header