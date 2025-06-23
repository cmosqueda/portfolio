import { useState } from "react";
import myFace from "../assets/personal/myface.jpg";

export default function IdCard() {
  const [flipped, setFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // new state

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
              <div className="flex flex-col mt-10 sm:my-10 items-center">
                <img
                  src={myFace}
                  alt="myface"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent flip when clicking image
                    setIsModalOpen(true);
                  }}
                  className="object-cover w-32 h-32 sm:w-40 sm:h-40 border border-neutral-900 rounded-sm hover:scale-105 transition-transform duration-300"
                />
                {/* name */}
                <p className="mt-3 font-bold">Tine Mosqueda</p>
              </div>

              {/* details */}
              <div className="flex flex-col w-4/5 sm:w-2/5 sm:ml-5 mx-0 my-3 text-neutral-950 text-sm">
                <hr className="border border-neutral-950 border-dashed" />
                <hr className="border border-neutral-950 border-dashed mt-1" />
                <div className="flex flex-row w-full justify-between my-3">
                  <div className="flex flex-col">
                    <p>BIRTHDATE</p>
                    <p className="font-bold">06.04.200X</p>
                    <p className="mt-2">SCHOOL</p>
                    <p className="font-bold">USTP</p>
                  </div>
                  <div className="flex flex-col">
                    <p>MBTI</p>
                    <p className="font-bold">INFJ</p>
                    <p className="mt-2">PROGRAM</p>
                    <p className="font-bold">BSIT</p>
                  </div>
                </div>
                <hr className="border border-neutral-950 border-dashed" />
                <hr className="border border-neutral-950 border-dashed mt-1" />
                <div className="items-center flex flex-col mt-3">
                  <img
                    className="w-32 sm:w-40 object-cover"
                    alt="Barcode Generator TEC-IT"
                    src="https://barcode.tec-it.com/barcode.ashx?data=tine-mosqueda&translate-esc=on"
                  />
                </div>
              </div>
            </div>

            {/* Back side */}
            <div className="bg-neutral-100 border flex flex-col absolute w-full h-full items-center justify-center txtcolor backface-hidden rotate-y-180 rounded-md">
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
                  development, machine learning, and quality assurance testing to create meaningful and impactful
                  solutions for the community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white p-2 rounded-lg shadow-xl max-w-[90%] sm:max-w-md"
              onClick={(e) => e.stopPropagation()} // prevent modal close on image click
            >
              <img src={myFace} alt="zoomed face" className="rounded-md w-full object-contain" />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-2 text-sm text-center text-neutral-600 hover:underline w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
