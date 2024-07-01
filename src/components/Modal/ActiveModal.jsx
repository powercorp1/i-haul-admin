import React, { useState, useRef } from "react";

import profile from '../../assets/react.svg'
const ActiveModal = ({ onClose ,string}) => {
  const modalRef = useRef();
  console.log(string);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white mb-80 justify-center">
        {/* <button onClick={onClose} className="place-self-end">
            <X size={30} />
          </button> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:px-14 py-5">
          <div className=" flex flex-col justify-center items-center ">
            <img src={profile} className="size-11"></img>
          </div>

          <div className=" flex flex-col justify-center items-center ">
            <h3 className="text-slate-700 mt-4">
              Are you sure you want to be a In-Active {string} ?
            </h3>
          </div>

          <hr className="m-2 mt-10"></hr>

          <div className="flex justify-between mt-8">
            <div className="flex flex-col justify-center items-center pl-10">
              <button>
                <h3 className="text-slate-800 font-bold">Yes</h3>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center pr-10">
              <button>
                {" "}
                <h3 className="text-slate-800 font-bold">No</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveModal;
