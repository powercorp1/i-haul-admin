import React, { useEffect } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import Select from "react-select";
import { useState } from "react";
import { useCardStore } from "../../../store";

import { useNavigate } from "react-router-dom";
import { Subtitles } from "lucide-react";
const AddNewHomeCard = ({ cardDetails }) => {
  const navigate = useNavigate();

  const applicableOptions = [
    {
      label: "All",
      value: "forall",
    },
    {
      label: "Mover",
      value: "moverspecific",
    },
    {
      label: "Customer",
      value: "customerspecific",
    },
    {
      label: "Mover",
      value: "moverSpecific",
    },
  ];
  const [titleValue, setTitleValue] = useState("");
  const [subTitleValue, setSubTitleValue] = useState("");
  const [actionLabel, setActionLabel] = useState("");
  const [applicable, setApplicable] = useState("");
  const [bgColorValue1, setBgColorValue1] = useState("");
  const [bgColorValue2, setBgColorValue2] = useState("");

  const [imagePath, setImagePath] = useState("");

  const prevBody = useCardStore((state) => state.body);
  const setBody = useCardStore((state) => state.setBody);

  const bgColorHandler1 = (selectedOption) => {
    setBgColorValue1(selectedOption.target.value);
  };
  const bgColorHandler2 = (selectedOption) => {
    setBgColorValue2(selectedOption.target.value);
  };

  const titleHandler = (selectedOption) => {
    setTitleValue(selectedOption.target.value);
  };
  const subTitleHandler = (selectedOption) => {
    setSubTitleValue(selectedOption.target.value);
  };
  const actionLabelHandler = (selectedOption) => {
    setActionLabel(selectedOption.target.value);
  };
  const applicableHandler = (selectedOption) => {
    setApplicable(selectedOption);
  };

  const backHandler = () => {
    navigate("/homecards");
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePath(URL.createObjectURL(event.target.files[0]));
    }
  };

  const saveHandler = () => {
    const body1 = {
      title: titleValue,
      subTitle: subTitleValue,
      bgColor1: bgColorValue1,
      bgColor2: bgColorValue2,
      applicable: applicable.value,
      actionLabel: actionLabel,
      imagePath: imagePath,
    };

    if (!body1.bgColor2) body1.bgColor2 = body1.bgColor1;

    if (
      titleValue &&
      subTitleValue &&
      actionLabel &&
      applicable.value &&
      bgColorValue1 &&
      imagePath
    ) {
      prevBody.push(body1);

      setBody(prevBody);

      cardDetails(body1);

      navigate("/homecards");
    }
    else{
      
    }
  };

  return (
    <div className="m-5 mt-3 flex flex-col mb-[15%]">
      <div className="m-3">
        <button
          className="active-button bg-[#CBD2DA] text-white rounded-3xl h-10 w-20"
          onClick={backHandler}
        >
          <div className="text-sm text-[#637083] ">Back</div>
        </button>
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
                required
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="title"
                onChange={titleHandler}
                value={titleValue}
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
                onChange={subTitleHandler}
                value={subTitleValue}
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
                onChange={actionLabelHandler}
                value={actionLabel}
                required
              />
            </div>
          </div>
          <div className="flex w-[50%] mb-4 items-center gap-[13.6%]">
            <div className="text-[#637083] font-semibold p-4">
              {" "}
              Background Color
            </div>
            <div className="flex gap-7">
              <div class="flex justify-center space-x-2">
                <input
                  id="nativeColorPicker1"
                  type="color"
                  value={bgColorValue1 }
                  onChange={bgColorHandler1}
                />
                <button
                  id="burronNativeColor"
                  type="button"
                  className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Color 1
                </button>
              </div>
              <div class="flex justify-center space-x-2">
                <input
                  id="nativeColorPicker1"
                  type="color"
                  value={bgColorValue2 ? bgColorValue2 : bgColorValue1}
                  onChange={bgColorHandler2}
                />
                <button
                  id="burronNativeColor"
                  type="button"
                  className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Color 2
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[39%] justify-between my-4 mb-7 items-center">
            <div className="text-[#637083] font-bold p-4"> Image</div>
            <div className="">
              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  onChange={onImageChange}
                />
              </div>
            </div>
          </div>
          <div className="flex w-[20%] justify-between mb-4 items-center ">
            <div className="text-[#637083] font-semibold p-justify-between p-4">
              Applicable For
            </div>
            <div className="w-[12%] mb-4">
              <Select
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1170%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                options={applicableOptions}
                onChange={applicableHandler}
                value={applicable}
              />
            </div>
          </div>

          <hr className="border-gray-300 border" />
          <div className="p-4 mr-5 flex justify-end">
            <button
              className="active-button bg-blue-600 text-white rounded-3xl h-10 w-20"
              onClick={saveHandler}
            >
              <div className="text-sm italic ">Save</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNewHomeCard;
