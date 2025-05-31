import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row py-3 m-5 bg-neutral-50 text-neutral-800 items-center justify-center">
        <p className="font-bold text-lg">Find me on other platforms</p>

        {/* vertical */}
        <div className="w-0.5 h-24 m-3 sm:m-5 bg-neutral-800 hidden sm:flex"></div>

        {/* socials */}
        <div className="flex flex-col my-3 text-sm space-y-1">
          {/* github */}
          <a href="https://github.com/cmosqueda" target="_blank" className="flex flex-row items-center hover:underline">
            <BsGithub size={20}></BsGithub>
            <p className="ml-1">cmosqueda</p>
          </a>

          {/* facebook */}
          <a
            href="https://www.facebook.com/christine.mosqueda.395"
            target="_blank"
            className="flex flex-row items-center hover:underline"
          >
            <BsFacebook size={20}></BsFacebook>
            <p className="ml-1">Christine Mosqueda</p>
          </a>

          {/* instagram */}
          <a
            href="https://www.instagram.com/tyne.exe/profilecard/?igsh=bng5Y2cybWJxa3dk"
            target="_blank"
            className="flex flex-row items-center hover:underline"
          >
            <BsInstagram size={20}></BsInstagram>
            <p className="ml-1">tyne.exe</p>
          </a>
        </div>
      </div>
    </>
  );
}
