import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useEffect } from "react";
import Input from "./input";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});
const provider = new GoogleAuthProvider();

function Login() {
  const {
    handleSubmit,
    login,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };

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
        <form className="login-body" onSubmit={handleSubmit(formSubmit)}>
          <Input
            id="username"
            label="Username"
            type="text"
            placeholder="Enter Username"
            errorMessage={errors.username?.message}
          />

          <Input
            id="Password"
            label="Password"
            type="password"
            placeholder="Enter Password"
            errorMessage={errors.password?.message}
          />
          <div className="login-footer">
            <button>ĐĂNG NHẬP</button>
            <button className="login-gg" onClick={handleLogin}>
              ĐĂNG NHẬP VỚI GOOGLE
            </button>

            <Link to={"/register"}>
              <span>Bạn chưa có tài khoản?</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
