import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="container">
        <div className="row text-white fw-3 fs-14">
          <div className="col ">
            <Link to="/" className="text-uppercase">
              <ul>
                SHOP
                <li>Product 1</li>
                <li>Product 1</li>
                <li>Product 1</li>
              </ul>
            </Link>
          </div>
          <div className="col ">
            <Link to="/" className="text-uppercase">
              <ul>
                CONTACT US
                <li>Email : thd@gmail.com</li>
                <li>Địa chỉ : 181 Quang Trung, Yên Nghĩa, Hà Đông</li>
                <li>SĐT: 0399085128</li>
              </ul>
            </Link>
          </div>
          <div className="col ">
            <Link to="/" className="text-uppercase">
              <ul>
                POLICIES
                <li>privacy policy</li>
                <li>terms of service</li>
                <li>Shipping policy</li>
              </ul>
            </Link>
          </div>
        </div>
        <span className="text-white copyright-text text-manrope fs-14 fw-3">
          &copy; 2023 THD. Đã đăng ký bản quyền .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
