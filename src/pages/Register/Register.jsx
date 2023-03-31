import { Link } from "react-router-dom";
import "./Register.scss";

function Register() {
    return (
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login-title">
                    <h4>Đăng ký</h4>
                </div>
                <div className="login-body">
                    <input placeholder="Họ và tên"></input>
                    <input placeholder="Số điện thoại"></input>
                    <input placeholder="Email/Số điện thoại/Tên đăng nhập"></input>
                    <input type="password" placeholder="Mật khẩu"></input>
                    <input type="password" placeholder="Nhập lại mật khẩu"></input>

                </div>
                <div className="login-footer">
                    <button>ĐĂNG KÝ</button>
                    <Link to={'/login'}><span>Bạn đã có tài khoản?</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
