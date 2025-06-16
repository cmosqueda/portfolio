import { useState } from "react";
import myFace from "../assets/personal/myface.jpg";
import clickCard from "../assets/personal/clickCard.png";

import { LuConstruction } from "react-icons/lu";

export default function IdCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="my-10">
      <div className="flex flex-col w-full items-center">
        <p className="text-3xl font-bold txtcolor mb-10">TYNE'S ID CARD</p>

        {/* Flip container */}
        <div
          onClick={() => setFlipped(!flipped)}
          className="cursor-pointer perspective md:w-3/6 w-5/6 transition-all h-[600px] sm:h-[350px]"
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            } rounded-md`}
          >
            {/* Front side */}
            <div className="absolute w-full h-full flex flex-col sm:flex-row items-center justify-center border bg-neutral-100 backface-hidden rounded-md">
              {/* photo and barcode */}
              <div className="flex flex-col mt-10 sm:my-10">
                <img
                  src={myFace}
                  alt="myface"
                  className="object-cover w-32 h-32 sm:w-40 sm:h-40 border border-neutral-900 rounded-sm"
                />
                <img
                  className="w-32 sm:w-40 object-cover my-3"
                  alt="Barcode"
                  src="https://barcode.tec-it.com/barcode.ashx?data=tyne&translate-esc=on&color=0a0a0a&bgcolor=f5f5f5"
                />
              </div>

              {/* details */}
              <div className="flex flex-col w-4/5 sm:w-2/5 sm:ml-5 mx-0 my-3 text-neutral-950 text-sm">
                <img src={clickCard} alt="clickCard" />

                <div className="flex flex-row w-full justify-between my-3">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p>NAME</p>
                      <p className="font-bold">TYNE</p>
                    </div>
                    <div className="flex flex-col my-2">
                      <p>SCHOOL</p>
                      <p className="font-bold">USTP</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p>BIRTH DATE</p>
                      <p className="font-bold">06.04.200X</p>
                    </div>
                    <div className="flex flex-col my-2">
                      <p>PROGRAM</p>
                      <p className="font-bold">BSIT</p>
                    </div>
                  </div>
                </div>

                <hr className="border border-neutral-950 border-dashed" />
                <hr className="border border-neutral-950 border-dashed mt-1" />

                <div className="my-3 flex flex-col">
                  <p className="text-center italic text-xs">
                    I drift along the gray tides—the conflicting space between muted black and blaring white, where
                    nuance lives and extremes subside.
                  </p>
                </div>
              </div>
            </div>

            {/* Back side */}
            <div className="border flex flex-col absolute w-full h-full items-center justify-center bgcolor txtcolor text-xl  backface-hidden rotate-y-180 rounded-md">
              <LuConstruction size={60}></LuConstruction>
              <p className="m-5 text-center">Bruh this still under construction... Come back some other time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
