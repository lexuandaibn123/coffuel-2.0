import styles from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <div
      className={`${styles.footer} w-full h-[140vh] sm:h-[60vh] lg:h-[45vh] flex items-center justify-center sm:flex-row flex-col px-5 lg:px-32`}
    >
      <div className="sm:h-full w-full sm:w-1/3 sm:py-2 flex items-center justify-start flex-col py-2">
        <div className="flex sm:h-1/3 w-full items-center justify-start">
          <img
            src="/image/logo-black.png"
            alt=""
            className="w-1/2 sm:w-auto sm:h-full"
          />
          <span className={`${styles.logo} text-4xl sm:text-2xl`}>Coffuel</span>
        </div>
        <div className="w-full pe-6 text-justify">
          Coffuel được sinh ra là giải phá với hiệu suất vượt trội, đa dạng hơn
          về nhiên liệu, tận dụng lượng phụ phẩm công nghiệp dồi dào và vẫn giữ
          được sự cạnh tranh về giá cả.
        </div>
        <div className="h-[5vh] sm:h-[10%] w-full mt-2">
          <div className="flex items-center justify-start h-full w-full">
            <div className="h-full mr-4">
              <Link
                className="h-full"
                href={"https://www.facebook.com/Coffuel2022"}
              >
                <img className="h-full" src="/icon/facebook-icon.png" alt="" />
              </Link>
            </div>
            <div className="h-full mr-4 w-full">
              <Link
                className="h-full"
                href={"mailto:contact.coffuel@gmail.com"}
              >
                <img className="h-full" src="/icon/mail-icon.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="uppercase w-full sm:w-1/3 sm:h-full py-2 sm:py-8 flex justify-start ms:justify-center">
        <div>
          <div className="w-fit">
            <div className="font-bold text-xl">Thông tin hữu ích</div>
            <hr />
          </div>
          <div className="py-5">
            <div className="py-1">
              <Link href={"/"}>trang chủ</Link>
            </div>
            <div className="py-1">
              <Link href={"/about"}>tổng quan</Link>
            </div>
            <div className="py-1">
              <Link href={"/product"}>sản phẩm</Link>
            </div>
            <div className="py-1">
              <Link href={"/blog"}>bài viết</Link>
            </div>
            <div className="py-1">
              <Link href={"/contact"}>liên hệ</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/3 h-full py-2 sm:py-8 flex justify-start sm:justify-center">
        <div>
          <div className="w-fit">
            <div className="font-bold text-xl uppercase">Thông tin liên hệ</div>
            <hr />
          </div>
          <div className="py-2 sm:py-5">
            <div>Địa chỉ: Đại học Bách Khoa Hà Nội</div>
            <div className="mt-2">
              <div className="font-bold">Phạm Minh Long Hải</div>
              <div>
                <span className="font-bold">Email: </span>
                phamminhlonghaihust@gmail.com
              </div>
              <div>
                <span className="font-bold">Điện thoại: </span>0866 869 318
              </div>
            </div>
            <div className="mt-2">
              <div className="font-bold">Bùi Nguyễn Khánh Linh</div>
              <div>
                <span className="font-bold">Email: </span>
                linhbnk.dynamicftu@gmail.com
              </div>
              <div>
                <span className="font-bold">Điện thoại: </span>0396 531 013
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
