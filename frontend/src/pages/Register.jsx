import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import {login, register} from '../features/auth/authSlice'

function Register() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { name, email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    let userData = {};

    if (isRegister) {
      userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }else {
      userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }

  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container flex flex-col items-center my-10 p-10 bg-white rounded-lg border-t-8 border-slate-900 xl:w-1/2 ">
        <h1 className="pt-3 my-3 flex text-slate-700 text-3xl">
          <FaUserAlt className="mr-3" />
          {isRegister ? "Register" : "Login"}
        </h1>
        <div className="flex text-neutral-700 p-5 bg-white">
            <form onSubmit={onSubmit}>
            {isRegister && (
              <div>
                <label className="block mb-2 text-lg">Name</label>
                <input
                  className="p-3 mb-3 border-slate-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
            )}
            <div>
              <label className="block mb-2">Email</label>
              <input
                className="p-3 mb-3 border-slate-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <input
                className="p-3 mb-3 border-slate-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="block w-80 h-12 border-none bg-slate-700 text-gray-100 my-3 rounded-lg hover:bg-slate-900 hover:text-gray-100 md:w-96"
              >
                Submit
              </button>
            </div>

            </form>
        </div>
      </div>
    </>
  );
}

export default Register;
