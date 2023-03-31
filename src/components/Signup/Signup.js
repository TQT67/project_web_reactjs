import Input from "./input";
import {useForm} from "react-hook-form";
import {yupResolver,} from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Signup.css"
const schema = yup.object({
      username: yup.string().required("Username is a required field"),
      phoneNumber: yup.string().required("phoneNumber is a required field").matches(/(?=.*[0-9])/, "Password must contain a number."),
      email: yup
      .string()
      .required("Email is a required field")
      .email("Email is not valid!."),
      password: yup.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must be match.")

});

function Signup() {
  const { handleSubmit , register, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });


  const formSubmit = data => {
    console.log(data);
  }


  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <form onSubmit={handleSubmit(formSubmit)}>
        <Input 
        id="username" 
        label="Username"
        type="text"
        placeholder="Enter Username" 
        register={{...register("username")}}
        errorMessage={errors.username?.message}
        />
        
        <Input 
        id="phoneNumber" 
        label="PhoneNumber"
        type="text"
        placeholder="Enter PhoneNumber" 
        register={{...register("phoneNumber")}}
        errorMessage={errors.phoneNumber?.message}
        />
        <Input 
        id="Email" 
        label="Email"
        type="email"
        placeholder="Enter Email" 
        register={{...register("email")}}
        errorMessage={errors.email?.message}
        />
        <Input 
        id="Password" 
        label="Password"
        type="password"
        placeholder="Enter Password" 
        register={{...register("password")}}
        errorMessage={errors.password?.message}
        />
        <Input 
        id="confirmPassword" 
        label="Confirm Password"
        type="password"
        placeholder="Confirm PassWord" 
        register={{...register("confirmPassword")}}
        errorMessage={errors.confirmPassword?.message}
        />
        <button>Sign Up</button>

      </form>
    </div>
    
  );
}

export default Signup;
