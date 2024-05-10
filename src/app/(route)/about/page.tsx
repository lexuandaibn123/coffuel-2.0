import NavBar from "../../../components/navbar/navbar";
import DivRoute from "../../../components/divRoute/divRoute";
import Footer from "../../../components/footer/footer";

export default function About() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      <div className={`h-[100vh] w-full overflow-y-auto z-0 mt-[8vh]`}>
        <DivRoute path={"/about"} title={"Tổng quan"} />
        <div className={`h-fit w-full px-32`}>
          <div className="h-[10vh] w-full text-3xl font-bold flex items-center">
            <div className="w-full">Vấn đề mà chúng tôi giải quyết</div>
          </div>
          <div className="h-[70vh] w-full flex">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="h-full aspect-square">
                <img
                  src="image/khung-hoang-nang-luong.png"
                  alt=""
                  className="h-full"
                />
              </div>
            </div>
            <div className="w-1/2 h-full flex items-start justify-start">
              <div className="w-full">
                <div className="w-full text-2xl font-bold text-error py-2 text-justify">
                  Khủng hoảng năng lượng
                </div>
                <div>
                  <div className="py-1">
                    <span className="font-bold">
                      Thiếu hụt năng lượng toàn cầu:&#160;
                    </span>
                    Các nước trên thế giới đang đối mặt với tình trạng thiếu hụt
                    nguồn cung trong khi giá dầu, khí đốt và điện tăng mạnh
                  </div>
                  <div className="py-1">
                    <span className="font-bold">
                      Căng thẳng chính trị:&#160;
                    </span>
                    Căng thẳng giữa Nga - Ukraine vào tháng 2 năm 2022 và các
                    biện pháp trừng phạt sau đó của phương Tây đã tạo ra áp lực
                    mới đối với năng lượng
                  </div>
                  <div className="py-1">
                    <span className="font-bold">
                      Tác động của đại dịch COVID-19:&#160;
                    </span>
                    Trong bối cảnh nguồn cung hạn hẹp và không đủ để đáp ứng nhu
                    cầu cho nền kinh tế đang phục hồi sau đại dịch COVID-19
                  </div>
                  <div className="py-1">
                    <span className="font-bold">Lạm phát:&#160;</span>Giá khí
                    đốt tự nhiên đạt mức cao nhất trong nhiều năm và giá dầu lên
                    gần 140 USD<sub>/thùng</sub>, gần mức kỷ lục mọi thời đại,
                    gây ra vòng xoáy lạm phát hậu đại dịch
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[70vh] w-full flex">
            <div className="w-1/2 h-full flex items-start justify-start">
              <div className="w-full">
                <div className="w-full text-2xl font-bold text-error py-2 text-justify">
                  Ô nhiễm môi trường
                </div>
                <div>
                  <div className="py-1">
                    <span className="font-bold">Khí thải và tro:&#160;</span>
                    Khi đốt cháy các nguồn năng lượng như viên nén gỗ, viên nén
                    rơm rạ, than... sinh ra lượng lớn các khí CO<sub>2</sub>, SO
                    <sub>2</sub> và NO<sub>x</sub> gây ra tác động lớn tới môi
                    trường. Bên cạnh đó lượng tro khi đốt lớn và mất lượng lớn
                    chi phí để xử lý
                  </div>
                  <div className="py-1">
                    <span className="font-bold">
                      Khai thác tài nguyên:&#160;
                    </span>
                    Việc sản xuất viên nén gỗ và các nguồn năng lượng tương tự
                    đòi hỏi việc khai thác tài nguyên gỗ. Nếu không được quản lý
                    tốt, việc khai thác quá mức có thể dẫn đến sự suy giảm của
                    rừng và động thực vật, ảnh hưởng đến sinh thái và môi trường
                    sống của động vật và con người
                  </div>
                  <div className="py-1">
                    <span className="font-bold">Phụ phẩm lớn:&#160;</span>
                    Việt Nam là một trong những quốc gia sản xuất cà phê hàng
                    đầu thế giới. Vì vậy, mỗi năm ở Việt Nam có hàng triệu tấn
                    bã cà phê được thải ra ngoài môi trường
                  </div>
                  <div className="py-1">
                    <span className="font-bold">
                      Ảnh hưởng của bã cà phê:&#160;
                    </span>
                    Lượng phụ phẩm bã cà phê khổng lồ nếu không được tận dụng
                    triệt để sẽ gây ra nhiều hậu quả khôn lường có thể kể đến
                    như thải ra khí độc NO<sub>2</sub>, SO<sub>2</sub>,.. gây
                    ảnh hưởng tiêu cực tới môi trường gấp 86 lần khí CO
                    <sub>2</sub>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="h-full aspect-square">
                <img
                  src="image/o-nhiem-moi-truong.png"
                  alt=""
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-32 flex items-center justify-center">
          <div className="w-full">
            <img src="/image/giai-phap.png" alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full px-32 flex items-center justify-center">
          <div className="w-full">
            <img src="/image/quy-trinh-thu-gom.png" alt="" className="w-full" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
