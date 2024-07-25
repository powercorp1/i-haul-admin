import React from "react";

import { useNavigate } from "react-router-dom";
const EditUser = () => {
  const navigate=useNavigate();
  const backHandler=()=>{

    navigate("/");
  }
  return (
    <div className="m-5 mt-3 flex flex-col mb-[15%]">
      <div className="m-3">
        <a onClick={backHandler}>
          <button className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20">
            <div className="text-sm text-[#637083] ">Back</div>
          </button>
        </a>
      </div>

      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#3C4C65]">
              User Details
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[30%] justify-between my-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> First Name</div>
            <div className="">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Naresh"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Last Name</div>
            <div className="">
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Katta"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4">
              {" "}
              Contact Number
            </div>
            <div className="">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9696969696"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Email</div>
            <div className="">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="sample@sample.com"
                required
              />
            </div>
          </div>
          <div className="flex w-[40%] justify-between my-2 mt-0">
            <div className="text-[#637083] font-bold p-4"> File</div>
            <div className="p-5 ">
              <div>
                <input type="file" id="myFile" name="filename" />
              </div>
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="p-4 mr-5 flex justify-end">
            <button className="active-button bg-primary-button text-white rounded-3xl h-10 w-20">
              <div className="text-sm italic text-primary-textcolor">Save</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
