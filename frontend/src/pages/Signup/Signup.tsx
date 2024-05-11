import { useState } from "react";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/enviornment";
const Signup = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { preventDefault: () => void; target: { name: string; value:string; }; }) => {
    e.preventDefault();
  
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { email, password, confirmPassword } = user;
    if (  email && password && password === confirmPassword) {

      axios
        .post(`${BASE_URL}/auth/signup`, { email, password })
        .then((res) => console.log(res)).then(()=>{

      toast.success("Account Created Successfully, Login With your credentials");
      navigate("/");
        }).catch(()=>{

      toast.error("Invalid credentials, User already exists, try again!");
        });
    } else {
      toast.error("Password Don't match, please try again");
    }
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className="Cntainer">
        <h1>Registration</h1>
      
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={register} className="btn">
          Sign Up
        </button>
        <p>
          Already Have an account?
          <b>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Signin
            </Link>
          </b>
        </p>
      </div>
    </div>
  );
};                                        

export default Signup;
