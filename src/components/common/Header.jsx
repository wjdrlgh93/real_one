import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUserFn, loginUserFn } from "../../slices/authSlice";

const Header = () => {

  const isLogin = useSelector((state) => state.auth.isLogin);
  const isUser = useSelector((state) => state.auth.isUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user); //  사용자 정보

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn") === "1";

    if (storedLogin && !isLogin) {
      dispatch(loginUserFn());

    const savedUser = localStorage.getItem("isUser")
    if (storedLogin && savedUser && !isLogin) {
      const parsedUser = JSON.parse(savedUser)
      dispatch(loginUserFn(parsedUser)); 

    }
  }, [dispatch, isLogin]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOutUserFn());
    localStorage.removeItem("isLoggedIn");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const items = useSelector(state => state.cart.items)

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
                    <span>
                       {user?.username || "사용자"} 님 환영합니다!
                    </span>
                  </li>
                  <li>
                    <Link to="#" onClick={handleLogout}>
                      LOGOUT
                    </Link>
                  </li>
                  <li>
                    <Link to={"/admin/members"}>회원목록</Link>
                  </li>
                  {user?.role === "admin" && (
                    <li>
                      <Link to={"/admin"}>ADMIN</Link>
                    </li>
                  )}
                  <li>
                    <Link to={"/auth/detail"}>개인정보</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/auth"}>LOGIN / 회원가입</Link>
                  </li>
                </>
              )}
              <li>
                <Link to={"/shop"}>주문내역</Link>
              </li>
              <li className="headerCart">       
                {items.length > 0 ? <span>{items.length}</span> : <></>}         
                <Link to={"/cart"}><img src="/images/shoppingCart.png" alt="cart" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-middle">
        <div className="nav-middle-con">
          <h1 className="logo2">
            <Link to={"/shop"}>
              <img src="/images/logo.png" alt="LOGO" width="125" height="90" />
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