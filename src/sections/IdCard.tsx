import { useState } from "react";
import myFace from "../assets/personal/myface.jpg";
// import clickCard from "../assets/personal/clickCard.png";

export default function IdCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="my-10">
      <div className="flex flex-col w-full items-center">
        <p className="text-3xl font-bold txtcolor mb-10">TINE'S ID CARD</p>

        {/* Flip container */}
        <div
          onClick={() => setFlipped(!flipped)}
          className="cursor-pointer perspective md:w-3/6 w-5/6 transition-all h-[500px] sm:h-[350px]"
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
                  alt="Barcode Generator TEC-IT"
                  src="https://barcode.tec-it.com/barcode.ashx?data=tine-mosqueda&translate-esc=on"
                />
              </div>

              {/* details */}
              <div className="flex flex-col w-4/5 sm:w-2/5 sm:ml-5 mx-0 my-3 text-neutral-950 text-sm">
                {/* <img src={clickCard} alt="clickCard" /> */}
                <hr className="border border-neutral-950 border-dashed" />
                <hr className="border border-neutral-950 border-dashed mt-1" />

                <div className="flex flex-row w-full justify-between my-3">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p>NAME</p>
                      <p className="font-bold">TINE</p>
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
            <div className="bg-neutral-100 border flex flex-col absolute w-full h-full items-center justify-center bgcolor txtcolor  backface-hidden rotate-y-180 rounded-md">
              {/* about text */}
              <div className="m-5 text-neutral-900 space-y-5">
                <p className="text-center text-2xl font-black">ABOUT ME</p>
                <p className="text-xs">
                  Hi! I’m Tine and I'm currently studying at USTP - CDO, Philippines. Although I aspire to become a
                  systems analyst, my curiosity and eagerness to learn doesn't end there. My experience in the academe
                  molded me to become versatile and flexible—progressing with different skillsets from technical writing
                  and project management to frontend development and design.
                </p>
                <p className="text-xs">
                  Right now, I'm on a mission to further expand my skills while studying, exploring deeper on full-stack
                  development, machine learning, and quality assurance testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
