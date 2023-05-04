import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
export default function Signup(params) {
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    role: "Teacher",
    password: "",
  });

  const navigate = useNavigate();
  const locationPath = useLocation();
  const redirectPath = locationPath.state?.path || "/";

  const authLocal = useAuth();

  const signup = async (e) => {
    console.log(userdata);
    try {
      const res = await axios.post(
        "http://localhost:5005/api/user/create",
        userdata
      );
      // console.log(res);
      // setUserData({ name: "", email: "", password: "" });
      const user = res.data;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      authLocal.login(user);
      navigate(redirectPath, { replace: true });
      alert("successfully Signup");
    } catch (error) {
      alert(error.response.data.error);

      console.log(error);
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userdata, [name]: value });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        {/* <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p> */}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Name
          </label>

          <div className="relative">
            <input
              onChange={handleInputs}
              name="fullName"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              onChange={handleInputs}
              name="email"
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          {/* <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Roles
            </legend>

            <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
              <div>
                <label htmlFor="Country" className="sr-only">
                  Register As?
                </label>

                <select
                  id="Country"
                  name="role"
                  onChange={handleInputs}
                  className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                >
                  <option value={"Teacher"}>Teacher</option>
                  <option value={"Student"}>Student</option>
                </select>
              </div>
            </div>
          </fieldset> */}

          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            name="role"
            onChange={handleInputs}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Teacher</option>
            <option defaultValue="Student">Student</option>
          </select>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              onChange={handleInputs}
              name="password"
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Already have account?
            <Link className="underline" to="/signin">
              Sign in
            </Link>
          </p>

          <button
            onClick={() => signup()}
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
