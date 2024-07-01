import React from "react";

const ImportCsv=()=>{

    return (
      <div>
        <section className=" bg-white m-2 border-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-bold text-md p-4  text-[#3C4C65]">
                Import CSV File
              </div>
              <div className="p-4 flex items-center ">
                <button className="active-button bg-blue-600 text-white rounded-3xl h-10 w-40">
                  <div className="text-sm italic">Download Sample File</div>
                </button>
              </div>
            </div>
            <hr className="border-gray-300 border" />

            <div className="flex w-[50%] justify-between my-4">
              <div className="text-[#637083] font-bold p-4"> CSV File</div>
              <div className="p-5 ">
                <div>
                  <input type="file" id="myFile" name="filename" />
                </div>
              </div>
            </div>
            <hr className="border-gray-300 border" />
            <div className="p-4 mr-5 flex justify-between">
              <a href="/store">
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

export default ImportCsv;
