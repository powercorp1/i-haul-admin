import React from "react";
import { useNavigate } from "react-router-dom";
const AddState=()=>{

  const navigate=useNavigate();
  const backHandler=()=>{
    navigate("/store");
  }

    return (
      <div className="pb-[30%]">
        <section className=" bg-white m-10 mx-6 border-2 ">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-bold text-md p-4  text-[#3C4C65]">
                Add State
              </div>
            </div>
            <hr className="border-gray-300 border" />

            <div className="flex-col w-[50%] justify-between mt-4 ">
              <div className="text-[#637083] font-bold p-4"> Select State</div>
            </div>

            <div className="pb-12 mr-12 ml-4">
              <select
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <hr className="border-gray-300 border" />
            <div className="p-4 mr-5 flex justify-between">
              <a onClick={backHandler}>
                <button className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20">
                  <div className="text-sm text-[#637083] ">Back</div>
                </button>
              </a>

              <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20">
                <div className="text-sm italic ">Save</div>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default AddState;