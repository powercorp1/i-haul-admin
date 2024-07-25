import React from "react";

import { useNavigate } from "react-router-dom";

import HaulCard from "../../../components/Card/Card";

import { useCardStore } from "../../../store";

const HomeCard = () => {
  const navigate=useNavigate();
  const body = useCardStore((store) => store.body);
  console.log("Body:", body);


  const addNewHandler=()=>{

    navigate("/addnewhomecard");

  }

 

  return (
    <div className="bg-white m-12 border-2">
      <section className="flex flex-col">
        <div className="p-4 mr-5 flex justify-end">
          <div className="px-3">
            <button
              className="active-button bg-primary-button text-black rounded-md h-10 w-20"
              onClick={addNewHandler}
            >
              <div className="text-sm text-primary-textcolor ">Add New</div>
            </button>
          </div>
        </div>
        <hr className="border-gray-300 border mb-6" />
        <div className="flex justify-between flex-wrap wrap">
          {body.map((card)=>(
            <HaulCard props={card}></HaulCard>
          ))}

        </div>
      </section>
    </div>
  );
};

export default HomeCard;
