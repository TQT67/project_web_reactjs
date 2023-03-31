import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);
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
          <button onClick={handleLogin}>ĐĂNG NHẬP</button>
          <button className="login-gg" onClick={handleLogin}>
            ĐĂNG NHẬP VỚI GOOGLE
          </button>

          <Link to={"/register"}>
            <span>Bạn chưa có tài khoản?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
