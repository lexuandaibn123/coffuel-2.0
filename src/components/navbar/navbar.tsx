"use client";
import { useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
export default function NavBar() {
  useEffect(() => {
    const menu: HTMLDivElement | null = document.querySelector(
      `.${styles.menu}`
    );
    const cancelMenu: HTMLDivElement | null = document.querySelector(
      `.${styles.cancel}`
    );
    const divRoute = document.querySelector(`.${styles.divRoute}`);
    menu?.addEventListener("click", (e) => {
      divRoute?.classList.add(`${styles.showDivRoute}`);
    });
    cancelMenu?.addEventListener("click", (e) => {
      divRoute?.classList.remove(`${styles.showDivRoute}`);
    });
  });
  return (
    <div
      className={`${styles.navbar} h-[7.5vh] lg:h-[6vh] w-full absolute top-0 left-0 overflow-hidden`}
    >
      <div className={`h-full flex relative items-center justify-center`}>
        <div className={`h-full absolute top-0 left-0 lg:p-1`}>
          <Link className="h-full w-fit" href={"/"}>
            <img src="/image/logo-black.png" alt="" className="h-full" />
          </Link>
        </div>
        <div
          className={`${styles.menu} lg:hidden absolute right-1 top-0 p-1 text-2xl`}
        >
          ☰
        </div>
        <div
          className={`${styles.divRoute} w-full h-full flex relative items-start lg:items-center lg:justify-center`}
        >
          <div className={`${styles.cancel} h-full w-1/5 sm:w-1/6 lg:hidden`}>
            <span className="w-full aspect-square flex items-center justify-center p-5 sm:p-10 ">
              <span className="w-full aspect-square flex items-center justify-center border rounded-md text-xl cursor-pointer">
                X
              </span>
            </span>
          </div>
          <div
            className={`${styles.route} pt-3 lg:pt-0 sm:pt-8 lg:mt-0 w-4/5 sm:w-5/6 uppercase flex flex-col lg:flex-row h-full lg:w-2/3 lg:items-center lg:justify-center font-bold`}
          >
            <div className="w-[100%] flex items-center justify-center py-2 lg:py-0">
              <Link href={"/"}>Trang chủ</Link>
            </div>
            <div className="lg:hidden w-full flex justify-center">
              <hr className="w-2/3" />
            </div>
            <div className="w-[100%] flex items-center justify-center py-2 lg:py-0">
              <Link href={"/about"}>Tổng quan</Link>
            </div>
            <div className="lg:hidden w-full flex justify-center">
              <hr className="w-2/3" />
            </div>
            <div className="w-[100%] flex items-center justify-center py-2 lg:py-0">
              <Link href={"/product"}>Sản phẩm</Link>
            </div>
            <div className="lg:hidden w-full flex justify-center">
              <hr className="w-2/3" />
            </div>
            <div className="w-[100%] flex items-center justify-center py-2 lg:py-0">
              <Link href={"/blog"}>Bài viết</Link>
            </div>
            <div className="lg:hidden w-full flex justify-center">
              <hr className="w-2/3" />
            </div>
            <div className="w-[100%] flex items-center justify-center py-2 lg:py-0">
              <Link href={"/contact"}>Liên hệ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
