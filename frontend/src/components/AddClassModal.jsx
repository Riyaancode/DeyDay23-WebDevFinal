import { useEffect, useState } from "react";
import axios from "axios";
export default function AddClassModal({ open, close, currUser }) {
  const [userdata, setUserData] = useState({
    name: "",
    teacherID: "",
  });

  useEffect(() => {
    const teacher = JSON.parse(localStorage.getItem("user"));
    if (teacher) {
      setUserData({ teacherID: teacher._id });
    }
  }, []);

  const createClass = async (e) => {
    console.log(userdata);
    try {
      const res = await axios.post(
        "http://localhost:5005/api/class/add",
        userdata
      );

      alert("successfully class created");
      close();
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
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed drop-shadow-lg flex justify-center align-middle z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-50">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">Add Class</h3>
            <button
              type="button"
              onClick={close}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="text"
                    name="name"
                    type="text"
                    onChange={handleInputs}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={() => createClass()}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
