import { useState, useRef, useEffect } from "react";
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timeout = setTimeout(() => {
        setStatus("idle");
      }, 5000);

      return () => clearTimeout(timeout); // Cleanup on unmount or status change
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between p-10 bg-lvleight text-lvlone space-y-6 sm:space-y-0 sm:items-start">
      {/* socials */}
      <div>
        <p className="font-bold text-lg mb-2">Find me on other platforms</p>
        <div className="flex flex-col text-sm space-y-3">
          <a href="https://github.com/cmosqueda" target="_blank" className="flex items-center hover:underline">
            <BsGithub size={20} />
            <p className="ml-1">cmosqueda</p>
          </a>
          <a
            href="https://www.facebook.com/christine.mosqueda.395"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <BsFacebook size={20} />
            <p className="ml-1">Christine Mosqueda</p>
          </a>
          <a
            href="https://www.instagram.com/tyne.jpg/profilecard/?igsh=bng5Y2cybWJxa3dk"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <BsInstagram size={20} />
            <p className="ml-1">tyne.jpg</p>
          </a>
        </div>
      </div>

      {/* email form */}
      <div className="sm:w-1/2">
        <p className="font-bold text-lg mb-2">Send me an email</p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-2 text-sm">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="px-3 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lvltwo"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="px-3 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lvltwo"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="px-3 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lvltwo"
          />
          <button
            type="submit"
            className="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-800 transition-all"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Email"}
          </button>

          {status === "success" && <p className="text-green-600 text-sm mt-1">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-sm mt-1">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}
