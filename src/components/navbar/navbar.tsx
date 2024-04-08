"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
const NavBar: React.FC<{ pathName: string }> = ({ pathName }) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div
      className={`${styles.navbar} flex-wrap justify-end flex bg-white z-10 lg:justify-center lg:relative`}
    >
      {/* <div className="h-full w-full lg:w-fit lg:aspect-square relative lg:absolute top-0">
        <div className="p-3 lg:p-2 text-lg aspect-square h-full flex justify-center items-center lg:w-full lg:h-fit">
          <Link href="/" className="h-full">
            <img src="/image/logo-black.png" alt="" className="h-full" />
          </Link>
        </div>
        <button
          className={`${styles.button} text-lg text-white mr-0 absolute right-4 top-4 h-1/2 aspect-square lg:hidden`}
          type="button"
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <div
            className={styles.threeDiv}
            style={{ rotate: !navbar ? "0deg" : "-90deg" }}
          >
            <div
              className={`${styles.line} ${styles.line1}`}
              style={{
                rotate: !navbar ? "0deg" : "60deg",
                top: !navbar ? "20%" : "50%",
                left: !navbar ? "15%" : "32.5%",
              }}
            ></div>
            <div
              className={`${styles.line} ${styles.line2}`}
              style={{
                rotate: !navbar ? "0deg" : "-60deg",
                top: !navbar ? "50%" : "50%",
                left: !navbar ? "15%" : "-2.5%",
              }}
            ></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
          </div>
        </button>
      </div> */}
      <div
        className={` h-full bg-white items-center justify-center lg:flex lg:w-8/12 ${
          navbar ? "flex" : "hidden"
        }`}
      >
        <div className="w-full h-full flex justify-around items-center lg:py-1 lg:justify-around">
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/home"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "home"
                  ? "/icon/home-icon.svg"
                  : "/icon/home-icon.png"
              }
              alt="Home"
              title="Home"
            />
            <div className={`${styles.text}`}>HOME</div>
          </Link>
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/product"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "product"
                  ? "/icon/product-icon.svg"
                  : "/icon/product-icon.png"
              }
              alt="Product"
              title="Product"
            />
            <div className={`${styles.text}`}>PRODUCT</div>
          </Link>
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/team"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "team"
                  ? "/icon/team-icon.svg"
                  : "/icon/team-icon.png"
              }
              alt="Team"
              title="Team"
            />
            <div className={`${styles.text}`}>TEAM</div>
          </Link>
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/blog"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "blog"
                  ? "/icon/blog-icon.svg"
                  : "/icon/blog-icon.png"
              }
              alt="Blog"
              title="Blog"
            />
            <div className={`${styles.text}`}>BLOG</div>
          </Link>
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/achievements"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "achievements"
                  ? "/icon/achievements-icon.svg"
                  : "/icon/achievements-icon.png"
              }
              alt="Achievements"
              title="Achievements"
            />
            <div className={`${styles.text}`}>AWARDS</div>
          </Link>
          <Link
            className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
            href="/contact"
          >
            <img
              className="hidden h-2/5 lg:block lg:h-full"
              src={
                pathName === "contact"
                  ? "/icon/contact-icon.svg"
                  : "/icon/contact-icon.png"
              }
              alt="Contact"
              title="Contact"
            />
            <div className={`${styles.text}`}>CONTACT</div>
          </Link>
        </div>
      </div>
      {/* <div className={`${styles.user} absolute bottom-0 w-full aspect-square`}>
        <Link
          className={`h-full py-3 w-full flex relative justify-center cursor-pointer items-center lg:w-fit lg:py-1 ${styles.link}`}
          href="/sign-in"
        >
          <img
            className="hidden h-2/5 lg:block lg:h-full"
            src={
              pathName === "sign-in"
                ? "/icon/user-icon.svg"
                : "/icon/user-icon.png"
            }
            alt="Signin"
            title="Signin"
          />
          <div className={`${styles.text}`}>SIGN IN</div>
        </Link>
      </div> */}
    </div>
  );
};
export default NavBar;
