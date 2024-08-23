/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useRef, useState } from "react";
import Button from "../helperComponent/Button";
import formStyle from "../styles/contact.module.css";
import { AppContext } from "./_app";
import { useContext } from "react";

const Contact = () => {
  const [myTheme] = useContext<any>(AppContext);
  const [toast, setToast] = useState(false);
  const form = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "snkncssnkncs",
        "template_bj0htkq",
        e.target,
        "k8g7ZUz1gN5IR-YJE"
      )
      .then(
        (result) => {
          e.target.reset();
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:min-h-screen">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-center">
        <div className="p-8">
          <h2
            className={`font-oleo underline underline-offset-4 decoration-wavy decoration-2 text-7xl text-center text-primary ${
              myTheme == "light" || myTheme == "emerald" || myTheme == "luxury"
                ? "drop-shadow-titleBlack"
                : "drop-shadow-titleWhite"
            }`}
          >
            Contact
          </h2>
          <h4 className="text-lg text-center text-[#aeaeae]">
            Let's talk & get conntected
          </h4>
        </div>
      </section>

      {/* map and contact form  */}
      <section className="container body-font relative">
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 filter grayscale contrast-125 hover:filter-none opacity-40 hover:opacity-100 transition-all duration-700 ease-in-out"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3148.2940485876484!2d90.44226239588527!3d23.738528268731926!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1724403324710!5m2!1sen!2sbd"
            ></iframe>
            <div className="px-6 lg:mt-0 bg-white text-black relative py-6 rounded shadow-md">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest overflow-scroll">
                Email
              </h2>
              <a
                href="mailto:shounaksarker@gmail.com"
                className="leading-relaxed text-indigo-500"
              >
                shounaksarker@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest mt-4">
                Phone
              </h2>
              <p className="leading-relaxed">+88 01960916139</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest mt-4">
                Address:
              </h2>
              <p className="mt-1 text-sm">
                95/1 Rajarbag, Basabo, Sabujbag, Dhaka-1214
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-4 mt-8 md:mt-0">
            <h2 className=" text-lg mb-1 font-medium title-font">Chat..!!</h2>
            <p className="leading-relaxed mb-5 ">Leave your thoughts.</p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="form-control min-w-[40vw]"
            >
              <div className="md:flex md:space-x-6">
                <div className={`${formStyle.inputContainer}`}>
                  <input
                    id="name"
                    name="from_name"
                    className=""
                    type="text"
                    pattern=".+"
                    required
                  />
                  <label className="" htmlFor="name">
                    Name
                  </label>
                </div>
                <div className={`${formStyle.inputContainer}`}>
                  <input
                    id="email"
                    name="user_email"
                    className=""
                    type="text"
                    pattern=".+"
                    required
                  />
                  <label className="" htmlFor="email">
                    Email
                  </label>
                </div>
              </div>

              <div className={`${formStyle.inputContainer}`}>
                <input
                  id="subject"
                  className=""
                  name="user_sub"
                  type="text"
                  pattern=".+"
                  required
                />
                <label className="" htmlFor="subject">
                  Subject
                </label>
              </div>

              <div className={`${formStyle.inputContainer}`}>
                <textarea id="msg" className="" name="message" required />
                <label className="" htmlFor="msg">
                  Your Message
                </label>
              </div>
              <Button type="submit" className="btn btn-primary">
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* toast  */}
      {toast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div>
              <span>Message sent successfully.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
