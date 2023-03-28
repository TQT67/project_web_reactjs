import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
    return (
        <div className="login-page">
            <div className="login-wrapper">
                <div className="login-title">
                    <h4>Đăng nhập</h4>
                </div>
                <div className="login-body">
                    <input placeholder="Email/Số điện thoại/Tên đăng nhập"></input>
                    <input type="password" placeholder="Mật khẩu"></input>
                </div>
                <div className="login-footer">
                    <button>ĐĂNG NHẬP</button>
                    <Link to={'/register'}><span>Bạn chưa có tài khoản?</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
