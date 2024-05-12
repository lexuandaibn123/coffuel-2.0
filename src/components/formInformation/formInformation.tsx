"use client";
import React, { useEffect, useState } from "react";
import styles from "./formInformation.module.css";
import useContactForm from "../../app/hook/useContactForm";
import sendEmail from "../../app/lib/sendMail";

interface ValuesMail {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
export default function FormInformation({
  setNotification,
  setStateNotification,
}: {
  setNotification: any;
  setStateNotification: any;
}): JSX.Element {
  const [valueDisable, setValueDisable] = useState(false);
  const [topUp, setTopUp] = useState(0);
  const [topDown, setTopDown] = useState(0);
  const [values, handleChange, resetValues] = useContactForm();
  useEffect(() => {
    const inputs = document.querySelectorAll(`input`);
    const labels = document.querySelectorAll("label");
    const textarea: HTMLTextAreaElement | null =
      document.querySelector("textarea");
    if (textarea?.clientHeight !== undefined) {
      setTopUp(-0.12 * textarea.clientHeight);
      setTopDown(0.05 * textarea.clientHeight);
    }
    const checkStateInput = (): void => {
      inputs.forEach((input, index) => {
        if (input === document.activeElement || input.value !== "") {
          labels[index].style.fontSize = "80%";
          labels[index].style.top = "-60%";
        } else if (input.value === "") {
          labels[index].style.fontSize = "100%";
          labels[index].style.top = "15%";
        }
      });
    };
    document.addEventListener("click", () => {
      checkStateInput();
      if (textarea != null) {
        if (
          textarea === document.activeElement ||
          textarea.getAttribute("content") !== ""
        ) {
          labels[labels.length - 1].style.fontSize = "80%";
          labels[labels.length - 1].style.top = topUp + "px";
        } else if (textarea.getAttribute("content") === "") {
          labels[labels.length - 1].style.fontSize = "100%";
          labels[labels.length - 1].style.top = topDown + "px";
        }
      }
    });
    inputs.forEach((input, index) => {
      input.addEventListener("blur", () => {
        // sự kiện blur kích hoạt khi dùng autocomplete của google
        if (input === document.activeElement || input.value !== "") {
          labels[index].style.fontSize = "80%";
          labels[index].style.top = "-60%";
        } else if (input.value === "") {
          labels[index].style.fontSize = "100%";
          labels[index].style.top = "15%";
        }
      });
    });
  });
  useEffect(() => {
    const buttonSendMail = document.querySelector(`.${styles.button}`);
    buttonSendMail?.classList.toggle("opacity-50");
  }, [valueDisable]);
  return (
    <div
      className={`${styles.containForm} relative w-full h-fit lg:h-full flex flex-wrap items-center justify-center text-black `}
    >
      <div className="h-full w-full absolute bottom-0 right-0 z-10 pointer-events-none"></div>
      <div className={`${styles.form} lg:w-2/3 w-[90%] py-10 h-fit`}>
        <div
          className={`${styles.name} flex justify-between items-center w-full mb-8`}
        >
          <div className={`${styles.containInputName} relative`}>
            <label htmlFor="first-name" className={`${styles.label} absolute`}>
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className={`${styles.inputText} shadow-lg py-2 px-2 w-full bg-sameGray border-b-2 border-white outline-none focus:border-green focus:border-b-3`}
            />
          </div>
          <div className={`${styles.containInputName} relative`}>
            <label htmlFor="last-name" className={`${styles.label} absolute`}>
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className={`${styles.inputText} shadow-lg  py-2 px-2 w-full bg-sameGray border-b-2 border-white outline-none focus:border-green focus:border-b-3`}
            />
          </div>
        </div>
        <div className={`${styles.email} w-full relative mb-8`}>
          <label htmlFor="email" className={`${styles.label} absolute`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`${styles.inputText} shadow-lg  py-2 px-2 w-full bg-sameGray border-b-2 border-white outline-none focus:border-green focus:border-b-3`}
          />
        </div>
        <div className={`${styles.content} w-full relative h-fit mb-5`}>
          <label
            htmlFor="content"
            className={`${styles.labelTextArea} absolute`}
          >
            What do you want to message us?
          </label>
          <textarea
            name="message"
            id="content"
            content={values.message}
            value={values.message}
            onChange={handleChange}
            className={`w-full bg-sameGray shadow-lg p-2 border-b-2 border-white outline-none focus:border-green focus:border-b-3`}
            rows={8}
          ></textarea>
        </div>
        <div className="w-full h-fit flex">
          <button
            disabled={valueDisable}
            onClick={() => {
              setValueDisable(true);
              setNotification("");
              sendEmail(values as ValuesMail)
                .then((result: any) => {
                  resetValues();
                  console.log(result);
                  setValueDisable(false);
                  setStateNotification("success");
                  setNotification(JSON.stringify(result));
                })
                .catch((error: any) => {
                  console.log(error.message);
                  setStateNotification("error");
                  setNotification(JSON.stringify(error.message));
                  setValueDisable(false);
                });
            }}
            className={`${styles.button} opacity-50 py-2 px-6 border-2 border-greenBlue text-greenBlue hover:bg-greenBlue hover:text-black rounded me-0 ms-auto`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
