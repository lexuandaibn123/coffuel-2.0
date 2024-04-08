"use client";
import React, { useState } from "react";
import NavBar from "../../../components/navbar/navbar";
import styles from "./home.module.css";
export default function Home(): JSX.Element {
  return (
    <div className={`${styles.home} cursor-area`}>
      <NavBar pathName={"home"} />
      <div className={`${styles.boxContent} flex flex-col lg:flex-row`}></div>
    </div>
  );
}
