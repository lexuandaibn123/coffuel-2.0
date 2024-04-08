"use client";
import React, { useState } from "react";
import NavBar from "../../../components/navbar/navbar";
import styles from "./contact.module.css";
import Form from "./form";
import Information from "./information";
import Notification from "../../../components/notification/notification";
export default function ContactPage(): JSX.Element {
  const [notification, setNotification] = useState("");
  const [stateNotification, setStateNotification] = useState("");
  return (
    <div className={`${styles.contact} cursor-area`}>
      <NavBar pathName={"contact"} />
      <div className={`${styles.boxContent} flex flex-col lg:flex-row`}>
        <Notification message={notification} state={stateNotification} />
        <Information />
        <Form
          setNotification={setNotification}
          setStateNotification={setStateNotification}
        />
      </div>
    </div>
  );
}
