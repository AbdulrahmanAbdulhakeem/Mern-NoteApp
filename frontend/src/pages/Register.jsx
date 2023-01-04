import React from "react";
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

function Register() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

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
            <form>
            {isRegister && (
              <div>
                <label className="block mb-2 text-lg">Name</label>
                <input
                  className="p-3 mb-3 border-emerald-700 border-2 rounded-md w-80 h-12 md:w-96 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
            )}
            </form>
        </div>
      </div>
    </>
  );
}

export default Register;
