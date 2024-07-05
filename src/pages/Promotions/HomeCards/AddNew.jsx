import React from "react";

const AddNewHomeCard = () => {
  return (
    <div className="m-5 mt-3 flex flex-col mb-[15%]">
      <div className="m-3">
        <a href="/homecards">
          <button className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20">
            <div className="text-sm text-[#637083] ">Back</div>
          </button>
        </a>
      </div>

      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#3C4C65]">
              Home Card Details
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[30%] justify-between my-4 items-center">
            <div className="text-[#637083] font-semibold p-4">Title</div>
            <div className="">
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="title"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Sub Title</div>
            <div className="">
              <input
                type="text"
                id="sub_title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="subtitle"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4">
              {" "}
              Action Label
            </div>
            <div className="">
              <input
                type="text"
                id="action_label"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="action"
                required
              />
            </div>
          </div>
          <div className="flex w-[30%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4">
              {" "}
              Background Color
            </div>
            <div className="">
              <input
                type="text"
                id="background_color"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="magenta"
                required
              />
            </div>
          </div>
          <div className="flex w-[39%] justify-between my-4 mb-7 items-center">
            <div className="text-[#637083] font-bold p-4"> Image</div>
            <div className="">
              <div>
                <input type="file" id="myFile" name="filename" />
              </div>
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
                requiredblue
              >
                <option value="forall">All</option>
                <option value="customerspecific">Customer </option>
                <option value="customeruserid">Mover</option>
                <option value="customeruserid">Guest</option>
              </select>
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

export default AddNewHomeCard;
