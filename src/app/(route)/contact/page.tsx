"use client";
import NavBar from "../../../components/navbar/navbar";
import DivRoute from "../../../components/divRoute/divRoute";
import Footer from "../../../components/footer/footer";
import FormInformation from "../../../components/formInformation/formInformation";
import Notification from "../../../components/notification/notification";
import styles from "./contact.module.css";
import { useState } from "react";
export default function Contact() {
  const [notification, setNotification] = useState("");
  const [stateNotification, setStateNotification] = useState("");
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      <div className="absolute w-full h-full top-[8vh] left-0">
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

        <Footer />
      </div>
    </div>
  );
}
