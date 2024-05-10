"use client";
import { useEffect } from "react";
import styles from "./sideBarAward.module.css";
export default function SideBarAward() {
  useEffect(() => {
    const divSideBarAward = document.querySelector(`.${styles.sideBarAward}`);
    if (divSideBarAward) {
      const divSideBarAwardElement = document.querySelector(
        `.${styles.sideBarAwardElement}`
      );
      if (divSideBarAwardElement) {
        divSideBarAwardElement.classList.add(styles.animationSideBarAward);
        const cloneDiv = divSideBarAwardElement.cloneNode(true);
        divSideBarAward.appendChild(cloneDiv);
      }
    }
  }, []);
  return (
    <div className={`${styles.sideBarAward} h-full flex w-max`}>
      <div className={`${styles.sideBarAwardElement} flex flex-row w-max`}>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/image/techstart.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Cuộc thi TechStart 2023
            </div>
          </div>
        </div>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img src="/image/kawai.png" className="w-full rounded-lg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Khởi nghiệp cùng Kawai 2023
            </div>
          </div>
        </div>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img src="/image/knt.png" className="w-full rounded-lg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Cuộc thi Khởi nghiệp trẻ 2023
            </div>
          </div>
        </div>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/image/lauchpad.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Cuộc thi Bệ phóng Khởi nghiệp - Startup LauchPad
            </div>
          </div>
        </div>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img src="/image/lhq.png" className="w-full rounded-lg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Diễn đàn tại Liên Hợp Quốc
            </div>
          </div>
        </div>
        <div className="h-full aspect-square">
          <div className="w-full p-2 flex items-center justify-center">
            <img src="/image/aigif.png" className="w-full rounded-lg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-xl font-bold w-full flex items-center justify-center text-wrap text-center">
              Diễn đàn Ấn Độ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
