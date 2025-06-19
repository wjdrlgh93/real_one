import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUserFn } from "../../slices/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="nav-top">
        <div className="nav-top-con">
          <h1 className="logo">
            <Link to={"/"}>HOME</Link>
          </h1>
          <div className="top-gnb">
            <ul>
              {isLogin ? (
                <>
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        alert("로그아웃");
                        dispatch(logOutUserFn());
                      }}
                    >
                      LOGOUT
                    </Link>
                  </li>
                  <li>
                    <Link to={"/auth/memberlist"}>회원목록</Link>
                  </li>
                  {`관리자권한` && (
                    <li>
                      <Link to={"/admin"}>ADMIN</Link>
                    </li>
                  )}
                  <li>
                    <Link to={"/auth/detail/userid"}>개인정보</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/auth"}>LOGIN</Link>
                  </li>
                </>
              )}

              <li>
                <Link to={"/auth"}>회원가입</Link>
              </li>
              <li>
                <Link to={"/shop"}>주문내역</Link>
              </li>
              <li>
                <Link to={"/cart"}>장바구니</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-middle">
        <div className="nav-middle-con">
          <h1 className="logo2">
            <Link to={"/shop"}>
              <img src="images/logo.png" alt="LOGO" width="200" height="150" />
            </Link>
          </h1>
        </div>
      </div>

      <div className="nav-bottom">
        <div className="nav-bottom-con">
          <div className="main-gnb">
            <ul>
              <li>
                <Link to={"/shop/food"}>사료</Link>
              </li>
              <li>
                <Link to={"/shop/snack"}>간식</Link>
              </li>
              <li>
                <Link to={"/shop/toy"}>장난감</Link>
              </li>
              <li>
                <Link to={"/shop/bath"}>목욕</Link>
              </li>
              <li>
                <Link to={"/shop/house"}>하우스</Link>
              </li>
              <li>
                <Link to={"/shop/fashion"}>패션</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
