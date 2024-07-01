import React, { useState ,useRef} from "react";

import { X } from "lucide-react";

const ChangePasswordModal=({onClose})=>{
  const modalRef=useRef();

  const closeModal=(e)=>{

    if(modalRef.current===e.target){
      onClose();
  }

  }
  

    return (
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="mt-10 flex flex-col gap-5 text-white mb-80">
          {/* <button onClick={onClose} className="place-self-end">
            <X size={30} />
          </button> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:px-14 py-6">
            <div className=" flex flex-col justify-center items-center">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white justify-center">
                Change Password
              </h2>
            </div>
            <hr className="m-2"></hr>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className=" pt-5 flex flex-col justify-center">
                <button className="active-button bg-green-600 text-white rounded-xl h-10 w-80 ">
                  <div className="text-md  ">New Password</div>
                </button>
                <button
                  onClick={onClose}
                  className="active-button bg-blue-600 text-white rounded-xl h-10 w-80 mt-4 "
                >
                  <div className="text-md  ">Cancel</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

}


export default ChangePasswordModal;