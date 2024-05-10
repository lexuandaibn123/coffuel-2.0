"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  const [tokenUser, setTokenUser] = useState("");
  useEffect(() => {
    const getCookie = (cname: string) => {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };
    setTokenUser(getCookie("tokenUser"));
  }, []);
  return (
    <div
      className={`${styles.navbar} h-[8vh] w-full bg-white absolute top-0 left-0 flex items-center justify-center`}
    >
      <div className="h-full aspect-square absolute top-0 left-2">
        <div className="h-full">
          <img src="/image/logo-black.png" alt="" className="h-full" />
        </div>
      </div>
      <div className="uppercase h-full w-full flex items-center justify-center">
        <div className="flex items-center justify-around h-full text-lg w-2/3">
          <div>
            <Link href={"/"}>trang chủ</Link>
          </div>
          <div>
            <Link href={"/about"}>tổng quan</Link>
          </div>
          <div>
            <Link href={"/product"}>sản phẩm</Link>
          </div>
          <div>
            <Link href={"/blog"}>bài viết</Link>
          </div>
          <div>
            <Link href={"/contact"}>liên hệ</Link>
          </div>
        </div>
      </div>
      {/* <div className="h-full aspect-[3/1] absolute top-0 right-2 p-3">
        <div
          className="h-full w-full cursor-pointer flex relative"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <img
            src="/icon/user-icon.png"
            alt=""
            className="h-full ms-auto me-0"
          />
          <div className="absolute h-fit bg-gray w-full top-[105%] rounded-lg">
            {dropDown ? (
              <div className="py-2 w-full flex items-center justify-center">
                {tokenUser !== "" ? (
                  <div className="flex flex-col justify-center items-center w-full">
                    <Link href={"/cart"}>Giỏ hàng</Link>
                    <Link href={"/sign-out"}>Đăng xuất</Link>
                  </div>
                ) : (
                  <div>
                    <Link href={"/sign-in"}>Đăng nhập</Link>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}
