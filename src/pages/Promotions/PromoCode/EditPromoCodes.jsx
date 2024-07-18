import React, { useState } from "react";

const EditPromoCodes = () => {

  const [showSpec,setShowSpec]=useState(false);

  const applicableFor=(e)=>{

    if(e.target.value==="customerspecific")
      setShowSpec(true);
    else
    setShowSpec(false);


  }
  return (
    <div className="m-5 mt-3 flex flex-col mb-[20%]">
      <div className="m-3">
        <a href="/promocodes">
          <button className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20">
            <div className="text-sm text-[#637083] ">Back</div>
          </button>
        </a>
      </div>

      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#3C4C65]">
              Promo Code Details
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[30%] justify-between my-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Promo Code</div>
            <div className="">
              <input
                type="text"
                id="promo_code"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="804832sdasd21dssdee"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Start Date</div>
            <div className="">
              <input
                type="text"
                id="start_date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1/2/2023"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> End Date</div>
            <div className="">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1/3/2098"
                required
              />
            </div>
          </div>
          <div className="flex w-[20%] justify-between mb-4 items-center ">
            <div className="text-[#637083] font-semibold p-justify-between p-4">
              Applicable For
            </div>
            <div className="w-[12%] mb-4">
              <select
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1170%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => applicableFor(e)}
              >
                <option value="forall">For All</option>
                <option value="customerspecific">Customer Specific</option>
              </select>
            </div>
          </div>
          {showSpec && (
            <div className="flex w-[30%] justify-between mb-4 items-center">
              <div className="text-[#637083] font-semibold p-4">
                {" "}
                Customer ID
              </div>
              <div className="">
                <input
                  type="text"
                  id="customer_id"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Customer Id or Email or Phone Number"
                  required
                />
              </div>
            </div>
          )}

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

export default EditPromoCodes;
