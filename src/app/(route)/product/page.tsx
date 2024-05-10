"use client";
import NavBar from "../../../components/navbar/navbar";
import DivRoute from "../../../components/divRoute/divRoute";
import Footer from "../../../components/footer/footer";
import styles from "./product.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Product() {
  const [sourceImage, setSourceImage] = useState(
    "/image/vien-nen-doanh-nghiep.png"
  );
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      <div className={`h-[100vh] w-full overflow-y-auto z-0 mt-[8vh]`}>
        <DivRoute path={"/product"} title={"Sản phẩm"} />
        <div className="h-[100vh] w-full px-32 py-20">
          <div
            className={`${styles.product} w-full h-full rounded-lg shadow-inner flex p-20`}
          >
            <div
              className={`${styles.divImageProduct} h-full aspect-square rounded-lg relative flex items-center justify-center`}
            >
              <img
                src={sourceImage}
                className={`${styles.imageProduct} h-full rounded-lg`}
                alt=""
              />
              <div className="absolute w-full h-1/6 flex items-center justify-center top-[100%]">
                <div className="h-1/2 mx-2 cursor-pointer aspect-square overflow-hidden border border-sm">
                  <img
                    src="/image/vien-nen-doanh-nghiep.png"
                    className="h-full"
                    alt=""
                    onClick={(e) => {
                      setSourceImage(e.currentTarget.src);
                    }}
                  />
                </div>
                <div className="h-1/2 mx-2 cursor-pointer aspect-square overflow-hidden border border-sm">
                  <img
                    src="/image/phieu-kiem-dinh.png"
                    className="w-full"
                    alt=""
                    onClick={(e) => {
                      setSourceImage(e.currentTarget.src);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-full px-32">
              <div>
                <div className="font-bold text-2xl mb-3">
                  Viên nén sinh khối từ bã cà phê
                </div>
                <div className="py-2">
                  <div className="font-bold text-xl mb-2">
                    Thông số kỹ thuật
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span className="font-bold">Nhiệt lượng:&#160;</span>
                        19,7-20,9(MJ/kg)
                      </li>
                      <li>
                        <span className="font-bold">
                          Khí độc thải ra:&#160;
                        </span>
                        ≈0,04(Kg/kWh)
                      </li>
                      <li>
                        <span className="font-bold">
                          Khối lượng tro sau khi đốt:&#160;
                        </span>
                        2-3%
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-2">
                  <div className="font-bold text-xl mb-2">Thông số khác:</div>
                  <div>
                    <ul>
                      <li>
                        <span className="font-bold">Giá cả:&#160;</span>
                        3.600-4.000(VNĐ/kg)
                      </li>
                      <li>
                        <span className="font-bold">
                          Giá cả / Nhiệt năng:&#160;
                        </span>
                        172-203(VNĐ/MJ)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-max mt-5">
                  <Link
                    href={"/contact"}
                    className={`${styles.buttonContact} py-2 px-5 font-bold text-green text-xl border rounded-lg`}
                  >
                    Liên hệ ngay để nhận tư vấn và đặt hàng!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
