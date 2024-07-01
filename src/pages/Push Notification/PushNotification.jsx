import React from "react";

const PushNotification = () => {
  return (
    <div className="m-5 pb-[12.5%]">
      <section className=" bg-white m-2 border-2">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl p-4  text-[#3C4C65]">
              Send Push Notification
            </div>
          </div>
          <hr className="border-gray-300 border" />
          <div className="flex flex-col m-5">
            <div className="text-[#3C4C65] font-semibold">User Type</div>
            <div className="py-3 ">
              <select
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10"
                required
              />
            </div>
          </div>
          <div className="flex flex-col m-5">
            <div className="text-[#3C4C65] font-semibold">Title</div>
            <div className="py-3 ">
              <input
                id="user_type_text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="flex flex-col m-5">
            <div className="text-[#3C4C65] font-semibold">Message</div>
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
          <div className="p-4 mr-5 flex justify-end">
            <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20">
              <div className="text-sm italic ">Send</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PushNotification;
