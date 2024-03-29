import React from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
      setUser(null);
    });
  };

  useEffect(() => {
    console.log("render-user");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);
  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links align-center">
                <li>
                  <Link to="/seller">Trung tâm người bán</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/download">Tải xuống</Link>
                </li>
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span className="fs-13">Theo dõi chúng tôi tại</span>
                  <ul className="social-links flex align-center">
                    <li className="mx-2">
                      <a href="www.facebook.com" className="fs-15">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="www.instagram.com" className="fs-15">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                <li>
                  <Link to="/" className="top-link-itm">
                    <span className="top-link-itm-ico mx-2">
                      <i className="fa-solid fa-circle-question"></i>
                    </span>
                    <span className="top-link-itm-txt">Hỗ trợ</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                {!user && (
                  <>
                    <li>
                      <Link to="/register">
                        <span className="top-link-itm-txt">Đăng ký</span>
                      </Link>
                    </li>
                    <li className="vert-line"></li>
                    <li>
                      <Link to="/login">
                        <span className="top-link-itm-txt">Đăng nhập</span>
                      </Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                    <span onClick={handleLogout} className="top-link-itm-txt cursor-pointer">
                      Đăng xuất
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
