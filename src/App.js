import "./App.css";
import { useEffect, useRef, useState } from "react";
import backgroundImage from "./img/background.png";
import BgImage from "./components/BgImage";
import emailjs from "@emailjs/browser";
import ScrollReveal from "scrollreveal";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    suggestion: "",
  });
  const form = useRef();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2000,
    });

    sr.reveal(".scroll", { origin: "bottom", distance: "30px" });
    sr.reveal(".info", { origin: "bottom", distance: "60px", delay: 800 });
    sr.reveal(".big");
  });

  const getQuote = () => {
    let img = document.querySelector(".background");
    let hero = document.querySelector(".hero");
    let quote = document.querySelector(".quote");
    img.style.width = "300%";
    img.style.height = "300%";
    hero.classList.add("opacity-0");
    img.style.objectPosition = "6%";
    setInterval(() => {
      hero.classList.add("hidden");
      setInterval(() => {
        quote.classList.remove("opacity-0");
      }, 100);
      quote.classList.remove("hidden");
      quote.classList.add("flex");
    }, 1000);
  };

  const sendMail = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.suggestion === "") {
      return;
    }

    emailjs
      .sendForm(
        "service_cfi6pvc",
        "template_hl4kxir",
        form.current,
        "7xCbb6kegmehP8AHx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            email: "",
            suggestion: "",
          });
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App pt-20 px-4">
      <div className="fixed top-0 left-0 -z-[1000] h-full w-full">
        <BgImage src={backgroundImage} />
      </div>
      {showAlert && (
        <div
          className="shadow max-w-lg top-2 w-[80%] left-[50%] translate-x-[-50%] z-[1000] bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex justify-between items-center absolute"
          id="alert"
          role="alert"
        >
          <span>
            <strong className="font-bold">Message sent!</strong>
            <span className="block sm:inline">Well be in touch.</span>
          </span>
          <button onClick={() => setShowAlert(false)}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      )}
      <a
        href="/crosswirex"
        className=" font-header top-2 left-[50%] -translate-x-[50%] absolute font-bold text-white text-xl"
      >
        crosswirex
      </a>
      <div className="hero ml-[50%]">
        <span className="big ml-[-20px] text-10xl md:text-12xl md:ml-[-30px]">
          we
        </span>
        <span className="info flex flex-col text-3xl text-white">
          <span>design</span>
          <span>develop</span>
          <span>manage</span>
        </span>
        <p className="scroll text-[#82817C] md:text-[18px] md:max-w-[25vw] mt-6">
          Every great product starts as an idea, lets bring your idea to live.
        </p>
        <button
          onClick={getQuote}
          className="quote-btn scroll border border-white p-2 w-fit mt-6 text-[18px] md:text-[20px] text-white"
        >
          Get Quote
        </button>
      </div>
      <form
        ref={form}
        id="form"
        className="quote hidden w-80 opacity-0 flex-col gap-6 p-4 text-center mx-auto text-white"
        onSubmit={sendMail}
      >
        <span>Tell us</span>
        <textarea
          name="suggestion"
          className="resize-none h-64 bg-transparent border rounded-lg border-[#787977] indent-0 p-3 outline-none"
          value={formData.suggestion}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          className="border rounded-lg border-[#787977] bg-transparent p-3 placeholder:underline placeholder:text-center outline-none"
          placeholder="email@example.com"
        />
        <input
          type="submit"
          value="Send"
          className="bg-[#787977] hover:bg-[#787970] py-3 rounded-lg text-black cursor-pointer font-medium active:translate-y-1"
        />
      </form>
    </div>
  );
}

export default App;
