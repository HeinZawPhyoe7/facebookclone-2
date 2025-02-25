import { useState } from "react";
import fLogo from "../../assets/facebookLogo.svg";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordconfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [username, setUsername] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handlePasswordconfirmationChange = (e: any) => {
    setPasswordconfirmation(e.target.value);
  };

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handleRoleChange = (e: any) => {
    setRole(e.target.value);
  };

  const handleDateofbirthChange = (e: any) => {
    setDateofbirth(e.target.value);
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordconfirmation,
          phone: phone,
          address: address,
          role: role,
          date_of_birth: dateofbirth,
          username: username,
        }
      );

      console.log("Register successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <div className="">
      <div className="flex bg-gray-200 min-h-screen p-4">
        <div className="hidden md:block my-auto">
          <img src={fLogo} className="w-[320px] h-[106px] mx-auto" alt="" />
          <h3 className="w-1/2 mx-auto">
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>

        {/* right div */}
        <div className="mx-auto ">
          <div className="bg-gray-100 w-[400px] mx-auto space-y-4 p-10">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={handleNameChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleEmailChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Emailaddress"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                htmlFor="passwordconfirmation"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>
              <input
                type="password"
                id="passwordconfirmation"
                onChange={handlePasswordconfirmationChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                onChange={handlePhoneChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Phone number"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                onChange={handleAddressChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Address"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                onChange={handleRoleChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Role"
              />
            </div>
            <div>
              <label
                htmlFor="dateofbirth"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="dateofbirth"
                onChange={handleDateofbirthChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Dateofbirth"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={handleUsernameChange}
                className="p-2 border border-blue-400 rounded-md w-full"
                placeholder="Enter Username"
              />
            </div>
            <hr />
            <div className="flex justify-center">
              <button
                onClick={handleRegister}
                className="bg-blue-500 w-full rounded-md py-2 text-white "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
