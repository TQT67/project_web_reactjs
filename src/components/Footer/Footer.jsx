import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="container py-4 ">
        <div className="col text text-white fw-3 fs-14">
          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">SHOP</span>
                <li>PRODUCT CATEGORY 1</li>
                <li>PRODUCT CATEGORY 1</li>
                <li>PRODUCT CATEGORY 1</li>
              </ul>
            </Link>
          </div>

          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">CONTACT US</span>
                <li>Email: THD@gmail.com</li>
                <li>SĐT: 0399085128</li>
                <li>Địa chỉ : Yên Nghĩa, Quang Trung , Hà Đông</li>
              </ul>
            </Link>
          </div>

          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">CHÍNH SÁCH</span>
                <li>Chính sách bảo mật</li>
                <li>Hạn của dịch vụ</li>
                <li>Chính sách phát triển</li>
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
