import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { useCardStore } from "../../store";
import { color } from "framer-motion";

const HaulCard = ({props}) => {
  const body = useCardStore((store) => store.body);
    console.log(props);
  return (
    <div className="m-5">
      <section className=" bg-white m-2  mb-[30%]">
        <div className="m-5">
          <Card
            className={`mt-6 h-60 w-96 `}
            style={{
              backgroundImage: `linear-gradient(135deg, ${props.bgColor1}, ${props.bgColor2})`,
            }}
          >
            <div className="flex flex-col w-[70%]">
              {" "}
              <CardBody className="p-5 pb-0">
                <Typography variant="h5" color="white" className="">
                  {props.title}
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-4"
                ></Typography>
                <Typography color="white">{props.subTitle}</Typography>
              </CardBody>
            </div>
            <CardFooter className="pt-0">
              <div className="flex justify-between">
                <div className="ml-5 pt-10">
                  <a href="#" className="inline-block">
                    <button
                      id="burronNativeColor"
                      type="button"
                      className="inline-block rounded-lg bg-slate-100 px-6 py-2.5 leading-tight shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    >
                      <Typography variant="h5" color="black" className="">
                        {props.actionLabel}
                      </Typography>
                    </button>
                  </a>
                </div>
                <div className="mr-6 pb-5">
                  <img src={props.imagePath} alt="" height={120} width={120} />
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HaulCard;
