import { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/enviornment";
import { User, setToken } from "../../store/user.atom";
import { jwtDecode } from "jwt-decode";
// components/admins.tsx


const Login = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    Email: "",
    Password: "",
  });
 
  const handleChange = (e: { preventDefault: () => void; target: { name: string; value: string; }; }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { Email, Password } = user;
   
      axios.post(`${BASE_URL}/auth/login` , {email:Email,password:Password},{timeout:2000})
      .then(res => {
        setToken(res.data.token)

        toast.info(res?.data?.message)
      return res.data.token
      }).then((token)=>{ return token
      }).then((token)=>{
       const payload:User=  jwtDecode(token)
        if(payload?.role=="admin"){
        navigate("/Admin")
        }else{
       navigate("/cricketer");
        }
       
      }).catch(()=>{
        toast.error("Invalid Email or password! please try again!");
      });
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className="Cntainer">
        <h1>Login Here</h1>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={user.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" onClick={register} className="btn">
          Login
        </button>
        <p>
          Don't Have an account?
          <b>
            {" "}
            <Link to="/Signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Login;
