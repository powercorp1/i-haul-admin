import React from "react";
import { FiEdit2 } from "react-icons/fi";
const EditMover = () => {
  return (
    <div className="m-5 mt-3 flex flex-col">
      <div className="m-3">
        <a href="/movers">
          <button className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20">
            <div className="text-sm text-[#637083] ">Back</div>
          </button>
        </a>
      </div>

      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold text-md p-4 text-[#3C4C65]">
              Mover Details
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
          <div className="flex w-[20.2%] justify-between mb-4 items-center">
            <div className="text-[#637083] font-semibold p-4"> Mover Type</div>
            <div className="">
              <select
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1170%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <div className="text-[#637083] font-bold p-4"> Profile Picture</div>
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
            <div className="font-bold text-md p-4  text-[#3C4C65]">
             Mover Manual Checklist
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="flex flex-col p-5">
            <div className="flex justify-between px-10">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">
                  Picture of Truck
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">
                  Driver License
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">
                  Insurance Card
                </div>
              </div>
            </div>
            <div className="flex justify-between px-10 pt-4 pb-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">W9</div>
              </div>
              <div className="flex items-center pl-[8.9%]">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">
                  Vehicle Registration
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="some_id"
                  className="relative peer shrink-0 appearance-none w-9 h-9 border-2 border-blue-500 rounded-sm bg-white  mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
                />
                <div className="font-bold text-md p-4  text-[#3C4C65]">
                  Profile Picture
                </div>
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
            <div className="font-bold text-md p-4 text-[#3C4C65]">
              Mover Vehicle Details
            </div>
          </div>
          <hr className="border-gray-300 border" />

          <div className="flex w-[100%] justify-between">
            {" "}
            <div className="w-[100%]">
              <div className="flex flex-col w-[30%] justify-between my-4">
                <div className="text-[#637083] font-semibold p-4 pl-5">
                  {" "}
                  Vehicle Year
                </div>
                <div className="pl-5">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="2024"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col w-[30%] justify-between my-4 mt-1">
                <div className="text-[#637083] font-semibold p-4 pl-5">
                  {" "}
                  Vehicle Model
                </div>
                <div className="pl-5">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="7series"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-[40%] justify-between my-2 mt-0">
                <div className="text-[#637083] font-bold p-4">
                  {" "}
                  Vehicle Image
                </div>
                <div className="p-5 pt-2 ">
                  <div>
                    <input type="file" id="myFile" name="filename" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-[5%]">
                <div className="text-[#637083] font-bold p-4 ">
                  {" "}
                  Vehicle Registration File
                </div>
                <div className="mr-[30%] text-[150%] text-blue-700">
                  <FiEdit2 />
                </div>
              </div>
              <div className="flex justify-between items-center pt-[9%]">
                <div className="text-[#637083] font-bold p-4 "> W9 Form</div>
                <div className="mr-[30%] text-[150%] text-blue-700">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="flex flex-col w-[30%] justify-between my-4">
                <div className="text-[#637083] font-semibold p-4 pl-5">
                  {" "}
                  Vehicle Company
                </div>
                <div className="pl-5">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Naresh"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col w-[30%] justify-between my-4 mt-1">
                <div className="text-[#637083] font-semibold p-4 pl-5">
                  {" "}
                  Vehicle License Number
                </div>
                <div className="pl-5">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Naresh"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-[40%] justify-between my-2 mt-0">
                <div className="text-[#637083] font-bold p-4">
                  {" "}
                  Driver License
                </div>
                <div className="p-5 pt-2 ">
                  <div>
                    <input type="file" id="myFile" name="filename" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-[5%]">
                <div className="text-[#637083] font-bold p-4 ">
                  {" "}
                  Vehicle Insurance File
                </div>
                <div className="mr-[30%] text-[150%] text-blue-700">
                  <FiEdit2 />
                </div>
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

export default EditMover;
