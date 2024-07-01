import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="m-5">
      <section className=" bg-white m-2 border-2 mb-[30%]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl p-4  text-[#3C4C65]">
              Terms and Conditions
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex flex-col m-5">
            <div className="text-[#3C4C65] font-semibold">termsandconditions</div>
            <div className="py-3 ">
              <textarea
                id="text_area"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>

          <hr className="border-gray-300 border m-5" />
          <div className="p-4 mr-5 flex">
            <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-[15%]">
              <div className="text-sm italic ">Update Terms and Conditions</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
