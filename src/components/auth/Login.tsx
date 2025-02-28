import { useState } from "react";
import fLogo from "../../assets/facebookLogo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navgite = useNavigate();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          email: email,
          password: password,
        }
      );

      console.log("Login successful:", response.data);
      if (response.data.access_token) {
        localStorage.setItem("accessToken", response.data.access_token);
        navgite("/home");
      }
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleCreate = () => {
    navgite("/register");
  };

  return (
    <div className="">
      <div className="flex bg-gray-200 h-screen">
        <div className="hidden md:block my-auto">
          <img src={fLogo} className="w-[320px] h-[106px] mx-auto" alt="" />
          <h3 className="w-1/2 mx-auto">
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>

        {/* right div */}
        <div className="mx-auto my-auto">
          <div className="bg-gray-100 w-[400px] h-[400px] mx-auto space-y-4 p-10">
            <div>
              <input
                type="email"
                onChange={handleEmailChange}
                className="p-4 border border-blue-400 shadow-md rounded-md w-full"
                placeholder="Enter Emailaddress"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={handlePasswordChange}
                className="p-4 border border-blue-400 shadow-md rounded-md w-full"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="bg-blue-500 w-full rounded-md py-2 text-white "
              > 
                Log in
              </button>
            </div>
            <div>
              <p className="text-blue-400 text-[10px] text-center">
                Forget Password?
              </p>
            </div>
            <hr />
            <div className="flex justify-center">
              <button
                onClick={handleCreate}
                className="bg-green-500 text-white p-2 rounded-md text-xs"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
