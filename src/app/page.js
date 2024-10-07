import History from "./components/History";
import { Merchandise } from "./components/Merchandise";
import Roadcom from "./components/Roadcom";
import Slider from "./components/Slider";
import { Token } from "./components/Token";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="xl:relative">
      <div className="w-full xl:fixed -z-50">
        <img
          src="/assets/mainImg.png"
          className="object-cover w-full h-screen"
          alt="Background"
        />
      </div>

      <div className="xl:w-[90vw] mx-auto">
        <div className="xl:h-[80vh] h-0"></div>

        <div className="xl:sticky xl:z-10 xl:top-20 xl:pt-20 rounded-t-3xl">
          <div className="xl:h-[90vh] xl:overflow-y-auto bg-[#FFFFFF] rounded-t-3xl xl:z-10">
            <History/>
            <Slider/>
            <Vision/>
            <Roadcom/>
            <Token/>
            <Merchandise/>
          </div>
        </div>
      </div>
    </div>
  );
}
