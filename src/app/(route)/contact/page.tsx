"use client";
import NavBar from "../../../components/navbar/navbar";
import DivRoute from "../../../components/divRoute/divRoute";
import Footer from "../../../components/footer/footer";
import FormInformation from "../../../components/formInformation/formInformation";
import Notification from "../../../components/notification/notification";
import styles from "./contact.module.css";
import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [notification, setNotification] = useState("");
  const [stateNotification, setStateNotification] = useState("");
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      <div
        className={`${styles.divNotification} absolute w-full h-full top-[8vh] left-0`}
      >
        <Notification message={notification} state={stateNotification} />
      </div>
      <div className={`h-[100vh] w-full overflow-y-auto z-0 mt-[8vh]`}>
        <DivRoute path={"/contact"} title={"Liên hệ"} />
        <div className=" w-full px-[25%] py-20">
          <div
            className={`${styles.form} w-full shadow-2xl flex flex-col items-center justify-center py-10`}
          >
            <div className="font-bold text-3xl">
              Để lại thông tin để nhận tư vấn!
            </div>
            <div className="w-full">
              <FormInformation
                setNotification={setNotification}
                setStateNotification={setStateNotification}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-20">
          <div className="font-bold text-3xl">Liên hệ ngay với chúng tôi</div>
          <div className="flex items-center justify-around w-4/5 py-20">
            <div
              className={`${styles.boxContact} aspect-[3/2] rounded-lg h-[30vh]`}
            >
              <div className="w-full h-2/3 flex items-center justify-center">
                <img src="/icon/facebook-icon.png" alt="" className="h-1/3" />
              </div>
              <div className="flex items-center justify-center">
                <Link href={"https://www.facebook.com/Coffuel2022"}>
                  https://www.facebook.com/Coffuel2022
                </Link>
              </div>
            </div>
            <div
              className={`${styles.boxContact} aspect-[3/2] rounded-lg h-[30vh]`}
            >
              <div className="w-full h-2/3 flex items-center justify-center">
                <img src="/icon/mail-icon.png" alt="" className="h-1/3" />
              </div>
              <div className="flex items-center justify-center">
                contact.coffuel@gmail.com
              </div>
            </div>
            <div
              className={`${styles.boxContact} aspect-[3/2] rounded-lg h-[30vh]`}
            >
              <div className="w-full h-2/3 flex items-center justify-center">
                <img src="/icon/location-icon.png" alt="" className="h-1/3" />
              </div>
              <div className="flex items-center justify-center">
                Hà Nội, Việt Nam
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
