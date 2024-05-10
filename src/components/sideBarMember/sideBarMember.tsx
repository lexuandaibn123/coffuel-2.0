"use client";
import { useEffect } from "react";
import styles from "./sideBarMember.module.css";
export default function SideBarMember() {
  useEffect(() => {
    const divSideBarMember = document.querySelector(`.${styles.sideBarMember}`);
    if (divSideBarMember) {
      const divSideBarMemberElement = document.querySelector(
        `.${styles.sideBarMemberElement}`
      );
      if (divSideBarMemberElement) {
        divSideBarMemberElement.classList.add(styles.animationSideBarMember);
        const cloneDiv = divSideBarMemberElement.cloneNode(true);
        divSideBarMember.appendChild(cloneDiv);
      }
    }
  }, []);
  return (
    <div className={`${styles.sideBarMember} h-full flex w-max`}>
      <div className={`${styles.sideBarMemberElement} flex flex-row w-max`}>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/pham-minh-long-hai.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Phạm Minh Long Hải</div>
            <div>Business Manager</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/bui-nguyen-khanh-linh.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Bùi Nguyễn Khánh Linh</div>
            <div>Logistics Leader</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/nguyen-xuan-bao.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Nguyễn Xuân Bảo</div>
            <div>Technical Leader</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/nguyen-minh-anh.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Nguyễn Minh Anh</div>
            <div>Financial Analyst</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/dinh-minh-quan.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Đinh Minh Quân</div>
            <div>Marketing</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/pham-thi-hong-ha.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Phạm Thị Hồng Hà</div>
            <div>Business Analyst</div>
          </div>
        </div>
        <div className="h-full aspect-[3/5]">
          <div className="w-full p-2 flex items-center justify-center">
            <img
              src="/avatar/le-xuan-dai.png"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center text-wrap text-center">
            <div className="text-xl font-bold">Lê Xuân Đại</div>
            <div>FullStack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
