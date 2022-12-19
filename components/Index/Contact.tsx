import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import Button from "../../helperComponent/Button";
import callme from "../../Imgs/call me.png";
import contact from "../../Imgs/contact.svg";
import contactGreen from "../../Imgs/contactGreen.svg";
import contactWhite from "../../Imgs/contactWhite.svg";
import contactOrange from "../../Imgs/contactOrange.svg";
import contactPink from "../../Imgs/contactPink.svg";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import style from "../../styles/component.module.css";
import formStyle from "../../styles/contact.module.css";

const Contact = () => {
  const [myTheme, ] = useContext<any>(AppContext);
  const [toast, setToast] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

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
          setTimeout(()=>{setToast(false)}, 5000)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center relative">
      <div
        className={`${style.round} before:z-[-99]
      before:right-[-30%] md:before:right-[-15%] lg:before:right-[-10%] xl:before:right-[-5%] 
      before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        <h1 className="text-5xl md:text-7xl  text-center  font-oleo underline decoration-wavy decoration-2 mb-6">
          Contact Me
        </h1>

        <div className="lg:flex xl:items-end lg:justify-between lg:space-x-12 bg-red-5">
          <div className="mb-6">
            <Tilt
              className={`${formStyle.parallaxEffect} mb-9 max-h-[163px]  md:max-h-[106px]`}
              perspective={1000}
              tiltMaxAngleX={10}
              tiltMaxAngleY={15}
            >
              <div
                className={`md:flex md:justify-center md:items-center mb-6 ${formStyle.glassi} bg-gradient-to-r from-primary to-[#a4f6ff52]`}
              >
                <Image
                  src={callme}
                  alt=""
                  className="max-w-[100px] mx-auto lg:w-2/5"
                />
                <div className="text-center lg:w-3/5">
                  <h3 className="text-xl">I am available to get a call...</h3>
                  <h4 className={`text-lg text-center ${formStyle.num}`}>
                    01960916139
                  </h4>
                </div>
              </div>
            </Tilt>
            {/* form  */}
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
          {/* mini image  */}
          <Image 
            src={(myTheme === "emerald") || (myTheme === "forest") ? contactGreen : ((myTheme === "luxury") ? contactWhite : ((myTheme === "halloween") ? contactOrange : (myTheme === "synthwave") || (myTheme === "dracula")? contactPink : contact))}
            width={500} alt="img" className='mx-auto' />
        </div>

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
    </div>
  );
};

export default Contact;
