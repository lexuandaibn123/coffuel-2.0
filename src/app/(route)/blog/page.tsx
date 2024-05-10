import NavBar from "../../../components/navbar/navbar";
import DivRoute from "../../../components/divRoute/divRoute";
import Footer from "../../../components/footer/footer";

export default function About() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden relative">
      <NavBar />
      <div className={`h-[100vh] w-full overflow-y-auto z-0 mt-[8vh]`}>
        {/* <DivRoute path={"/about"} title={"Tổng quan"} /> */}
        <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
          Chức năng hiện đang không khả dụng. Xin quay lại sau!
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
