"use client";
import React, { useState } from "react";
import NavBar from "../components/navbar/navbar";
import styles from "./home.module.css";
import SideBarMember from "../components/sideBarMember/sideBarMember";
import SideBarAward from "../components/sideBarAward/sideBarAward";
import Footer from "../components/footer/footer";
import Video from "../components/video/video";
import DivRoute from "../components/divRoute/divRoute";
export default function Home(): JSX.Element {
  const [video, setVideo] = useState(false);
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      {video ? (
        <div
          className={`${styles.divVideo} absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center p-32`}
          onClick={() => {
            setVideo(false);
          }}
        >
          <Video />
        </div>
      ) : (
        ""
      )}
      <div className={`h-[100vh] w-full overflow-y-auto z-0`}>
        <div
          className={`${styles.page1} relative w-full h-[100vh] flex items-center justify-center`}
        >
          <div className="h-full w-full flex items-center justify-center flex-col">
            <div className={`${styles.logo} text-9xl py-6`}>Coffuel</div>
            <div>
              <hr />
              <div className="font-bold italic text-5xl flex items-center justify-center py-3">
                REDUCE THE WASTES, CREATE THE WAYS
              </div>
              <hr />
            </div>
            <div className="py-2 text-2xl">VIÊN NÉN NĂNG LƯỢNG TÁI TẠO</div>
          </div>
        </div>
        <div
          className={`${styles.page2} bg-yellow h-[100vh] w-full py-10 px-32`}
        >
          <div className="h-1/2 w-full flex items-center justify-center py-2">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="text-justify text-lg w-full">
                <p className="py-2">
                  Chúng tôi là Coffuel - giải pháp đổi mới trong tái chế phụ
                  phẩm công nghiệp - công nghệ tái chế bã cà phê. Chúng tôi mang
                  đến cho thị trường sản phẩm viên nén sinh khối có thành phần
                  bã cà phê và là giải pháp cho 2 vấn đề lớn mà xã hội đang gặp
                  phải hiện nay là khủng hoảng năng lượng toàn cầu và ô nhiễm
                  môi trường.
                </p>
                <p className="py-2">
                  Coffuel được sinh ra là giải pháp với hiệu suất vượt trội, đa
                  dạng hơn về nhiên liệu, tận dụng lượng phụ phẩm công nghiệp
                  dồi dào và vẫn giữ được sự cạnh tranh về giá cả.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <img src="/image/logo-black.png" alt="" className="h-full" />
            </div>
          </div>
          <div className="h-1/2 w-full flex items-center justify-center py-2">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="h-full aspect-square overflow-hidden rounded-full">
                <img src="/image/product.jpg" alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/2 text-lg flex items-center justify-center">
              <ul className="w-full">
                <li className="py-2">
                  <span className="text-green text-2xl font-black">
                    &#10003;
                  </span>{" "}
                  Hiệu năng vượt trội thông qua đặc tính của bã cà phê
                </li>
                <li className="py-2">
                  <span className="text-green text-2xl font-black">
                    &#10003;
                  </span>{" "}
                  Giảm thiểu lượng khí độc phát thải từ các nguyên tố vô cơ nhờ
                  phụ gia giảm phát thải
                </li>
                <li className="py-2">
                  <span className="text-green text-2xl font-black">
                    &#10003;
                  </span>{" "}
                  Vẫn giữ sự cạnh tranh về giá cả
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.page3} bg-green h-[60vh] w-full flex`}>
          <div className="h-full w-1/2 px-32 py-20">
            <div className="font-bold text-2xl">
              Khám phá về dự án Coffuel - giải pháp xanh cho cộng đồng
            </div>
            <div className="mt-5">
              Coffuel thực hiện chuyển đổi những phụ phẩm công nghiệp thành
              nguồn năng lượng xanh, kết hợp với những công nghệ độc quyền để
              tối ưu hóa hiệu năng sản phẩm và đồng thời giảm thiểu khí thải,
              Coffuel đưa ra giải pháp tối ưu, góp phần đưa năng lượng tái tạo
              trở nên phổ biến và thông dụng, phù hợp với xu thế chung của thế
              giới, hướng đến vì mục tiêu phát triển xã hội một cách bền vững.
            </div>
          </div>
          <div className="h-full w-1/2 flex items-center justify-center p-14">
            <div className="h-full aspect-square">
              <div className="h-full relative">
                <div
                  className="absolute top-0 left-0 h-full w-full flex items-center justify-center"
                  onClick={() => {
                    console.log("test");
                    setVideo(true);
                  }}
                >
                  <div
                    className={`${styles.playBtn} cursor-pointer flex items-center justify-center rounded-full relative aspect-square h-1/5`}
                  >
                    <img src="/icon/play-icon.png" alt="" className="h-full" />
                  </div>
                </div>

                <img
                  src="/image/logo.png"
                  alt=""
                  className="h-full rounded-lg z-0 absolute top-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.page4} h-[200vh] w-full text-justify`}>
          <div className="h-[100vh] w-full flex py-10 px-32">
            <div className="w-1/2 h-full flex items-center justify-start">
              <img
                src="/image/business.png"
                alt=""
                className="h-5/6 rounded-xl"
              />
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <div>
                <div className="text-green font-bold text-2xl py-2">
                  GIẢI PHÁP DÀNH CHO
                </div>
                <div className="font-bold py-2">DOANH NGHIỆP</div>
                <div className="py-2">
                  <span className="font-bold">Vấn đề: </span>Đối với các doanh
                  nghiệp, cuộc khủng hoảng năng lượng toàn cầu trong những năm
                  vừa qua đã khiến giá nhiên liệu tăng chóng mặt gây ra những
                  hậu quả nghiêm trọng như gián đoạn chuỗi cung ứng, tăng chi
                  phí vận hành, ảnh hưởng tiêu cực đến năng lực cạnh tranh và
                  phát triển của doanh nghiệp.
                </div>
                <div className="py-2">
                  <div>
                    <span className="font-bold">Giải pháp: </span>Viên nén sinh
                    khối dành cho doanh nghiệp
                  </div>
                  <div>
                    Được thiết kế hướng tới các khách hàng B2B sản phẩm của
                    chúng tôi có các đặc tính:
                    <ul>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Độ bền cơ học cao giúp dễ dàng vận chuyển
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Hiệu năng cao đảm bảo trong quá trình sản xuất
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Giảm thiểu lượng khí độc phát thải từ các nguyên tố vô
                        cơ như Phosphorus, Nitrogen bằng cơ chế chuyển hóa, cố
                        định các nguyên tố về dạng muối vô cơ.
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Giá cả cạnh tranh
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100vh] w-full flex py-10  px-32">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div>
                <div className="text-green font-bold text-2xl py-2">
                  GIẢI PHÁP DÀNH CHO
                </div>
                <div className="font-bold py-2">CÁ NHÂN</div>
                <div className="py-2">
                  <span className="font-bold">Vấn đề: </span>Đang tìm kiếm giải
                  pháp nhằm bảo vệ môi trường. Tìm kiếm những nhiên liệu không
                  ám mùi để nấu đồ ăn, không sản sinh ra khói, không gây độc
                  hại.
                </div>
                <div className="py-2">
                  <div>
                    <span className="font-bold">Giải pháp: </span>Dòng sản phẩm
                    viên nén được customize tạo ra những nhiên liệu độc đáo và
                    hiệu quả cho khách hàng.
                  </div>
                  <div>
                    Được thiết kế hướng tới các khách hàng B2C thích đi cắm trại
                    và du lịch sản phẩm của chúng tôi có các đặc tính:
                    <ul>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Độ bền cơ học cao giúp dễ dàng mang theo trong mọi tình
                        huống
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Gọn nhẹ dễ dàng mang theo sử dụng
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Nhiệt lượng cao đảm bảo trong quá trình sử dụng
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Không khói và không mùi đảm bảo an toàn vệ sinh
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Hình thù độc đáo và đa dạng
                      </li>
                      <li>
                        <span className="text-green text-2xl font-black">
                          &#10003;
                        </span>{" "}
                        Giá cả cạnh tranh
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <img
                src="/image/customer.png"
                alt=""
                className="h-5/6 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.page5} h-[120vh] w-full bg-yellow px-32`}>
          <div className="h-1/2 w-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-center font-bold text-3xl h-[10vh]">
              Core Team:
            </div>
            <div
              className={`${styles.member} h-[50vh] py-5 w-full overflow-hidden`}
            >
              <SideBarMember />
            </div>
          </div>
          <div className="h-1/2 w-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-center font-bold text-3xl h-[10vh]">
              Các hoạt động của Coffuel:
            </div>
            <div
              className={`${styles.award} h-[50vh] py-5 w-full overflow-hidden`}
            >
              <SideBarAward />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
