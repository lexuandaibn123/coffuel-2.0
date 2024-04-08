import styles from "./contact.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const myEmails = [
  "lexuandaibn@gmail.com",
  "liamlee.dev@gmail.com",
  "contact.liamlee@gmail.com",
];
export default function Information(): JSX.Element {
  const [currentEmail, setCurrentEmail] = useState("lexuandaibn@gmail.com");
  useEffect(() => {
    const myEmail: HTMLElement | null = document.querySelector(
      `.${styles.myEmail}`
    );
    let i = 0;
    if (myEmail !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const changeEmails = setInterval(() => {
        myEmail.style.opacity = "0";
        setTimeout(() => {
          setCurrentEmail(myEmails[i]);
          myEmail.style.opacity = "1";
          if (i === myEmails.length - 1) i = -1;
        }, 1500);
        i++;
      }, 10000);
    }
  }, []);
  return (
    <div
      className={`${styles.boxInformation} h-1/2 w-full lg:h-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-lightGray flex items-center justify-center`}
    >
      <div className={`${styles.information} text-white w-10/12 py-12`}>
        <div className={`${styles.contactHeader} text-2xl`}>contact</div>
        <div className={`${styles.contactInformation} ps-10 text-lg my-4`}>
          <div className="flex h-6 my-4">
            <div>
              <img
                src="/icon/website-icon.png"
                alt="website"
                className="h-full"
              />
            </div>
            <div className="h-full flex items-center ps-4 ">
              <Link href={"https://liamlee.id.vn"}>https://liamlee.id.vn</Link>
            </div>
          </div>
          <div className="flex h-6 my-4">
            <div>
              <img
                src="/icon/github-icon.png"
                alt="github"
                className="h-full"
              />
            </div>
            <div className="h-full flex items-center ps-4">
              <Link href={"https://github.com/lexuandaibn123"}>
                lexuandaibn123
              </Link>
            </div>
          </div>
          <div className="flex h-6 my-4">
            <div>
              <img src="/icon/phone-icon.png" alt="phone" className="h-full" />
            </div>
            <div className="h-full flex items-center ps-4">
              (+84) 344-211-600
            </div>
          </div>
          <div className="flex h-6 my-4">
            <div>
              <img src="/icon/mail-icon.png" alt="mail" className="h-full" />
            </div>
            <div className={`h-full flex items-center ps-4 ${styles.myEmail}`}>
              {currentEmail}
            </div>
          </div>
          <div className="flex h-6 my-4">
            <div>
              <img
                src="/icon/linkedin-icon.png"
                alt="linkedin"
                className="h-full"
              />
            </div>
            <div className="h-full flex items-center ps-4">
              <Link href={"https://www.linkedin.com/in/lexuandai/"}>
                lexuandai
              </Link>
            </div>
          </div>
          <div className="flex h-6 my-4">
            <div>
              <img
                src="/icon/location-icon.png"
                alt="location"
                className="h-full"
              />
            </div>
            <div className="h-full flex items-center ps-4">
              Hanoi University of Science and Technology
            </div>
          </div>
        </div>
        <div className={`${styles.contactFooter} text-2xl`}>contact</div>
      </div>
    </div>
  );
}
