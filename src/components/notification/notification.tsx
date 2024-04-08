import React, { useEffect } from "react";
import styles from "./notification.module.css";

export default function Notification({
  message,
  state,
}: {
  message: string;
  state: string;
}): JSX.Element {
  useEffect(() => {
    const divNotification = document.querySelector(`.${styles.notification}`);
    if (
      (state === "success" || state === "warning" || state === "error") &&
      message.length !== 0 &&
      divNotification !== null
    ) {
      const newNotification = document.createElement("div");
      const divImage = document.createElement("div");
      const stateImage = document.createElement("img");
      const divMessage = document.createElement("div");
      const timeMessage = document.createElement("div");
      newNotification.classList.add(
        `${styles.newMessage}`,
        "bg-white",
        "flex",
        "text-black",
        "w-11/12",
        "lg:w-1/2"
      );
      divImage.classList.add("h-full", "aspect-square", "p-2");
      stateImage.classList.add("h-full");
      divMessage.classList.add("flex", "items-center");
      if (state === "error")
        timeMessage.classList.add(styles.timeMessage, "bg-error");
      else if (state === "success")
        timeMessage.classList.add(styles.timeMessage, "bg-success");
      else timeMessage.classList.add(styles.timeMessage, "bg-warning");
      // Không hiểu sao những khi cộng chuỗi bg- với state luôn lỗi k hiển thị màu
      stateImage.src = `icon/${state}-icon.png`;
      divImage.appendChild(stateImage);
      divMessage.textContent = message;
      newNotification.appendChild(divImage);
      newNotification.appendChild(divMessage);
      newNotification.appendChild(timeMessage);
      const firstChild = divNotification?.firstChild;
      if (firstChild !== null && firstChild !== undefined)
        divNotification.insertBefore(newNotification, firstChild);
      else divNotification?.appendChild(newNotification);
      setTimeout(() => {
        newNotification.style.opacity = "0";
        setTimeout(() => {
          divNotification.removeChild(newNotification);
        }, 500);
      }, 5000);
      Array.from(
        divNotification?.querySelectorAll(
          `.${styles.newMessage}`
        ) as unknown as HTMLCollectionOf<HTMLElement>
      ).forEach((oldNotification, index) => {
        oldNotification.style.top = index * 7 + 2 + "vh";
      });
    }
  }, [message]);
  return (
    <div className={`${styles.notification} h-full w-full lg:w-1/2`}></div>
  );
}
