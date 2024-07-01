import React from "react";

const Settings = () => {

  return (
    <div className="flex flex-col m-5">
      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4  text-[#637083]">
              Upload W9 Form
            </div>
            <div className="p-4 flex items-center ">
              <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-40">
                <div className="text-sm italic">View Sample File</div>
              </button>
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[50%] justify-between my-4">
            <div className="text-[#637083] font-bold p-4"> File</div>
            <div className="p-5 ">
              <div>
                <input type="file" id="myFile" name="filename" />
              </div>
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="p-4 mr-5 flex justify-end">
            <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20">
              <div className="text-sm italic ">Save</div>
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#637083]">
              Admin Fee
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[50%] justify-between my-4 items-center">
            <div className="text-[#637083] font-semibold p-4">
              {" "}
              Admin Fee (%)
            </div>
            <div className="p-2 ">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10"
                required
              />
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="p-4 mr-5 flex justify-end">
            <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20">
              <div className="text-sm italic ">Save</div>
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#637083]">
              Move Cancellation Fee
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex flex-col">
            <div className="flex w-[50%] justify-between my-2 items-center">
              <div className="text-[#637083] font-bold px-4">
                {" "}
                Before 24 hrs (%)
              </div>
              <div className="p-2 ">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="10"
                  required
                />
              </div>
            </div>
            <div className="flex w-[50%] justify-between my-2 items-center">
              <div className="text-[#637083] font-bold px-4">
                {" "}
                Before 24 hrs (%)
              </div>
              <div className="p-2 ">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="10"
                  required
                />
              </div>
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="p-4 mr-5 flex justify-end">
            <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20">
              <div className="text-sm italic ">Save</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
