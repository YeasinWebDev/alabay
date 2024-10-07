import Game from "./components/Game";
import History from "./components/History";
import { Merchandise } from "./components/Merchandise";
import Roadcom from "./components/Roadcom";
import Slider from "./components/Slider";
import Social from "./components/Social";
import { Token } from "./components/Token";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="xl:relative">
        <img
          src="/assets/mainImg.png"
          className="object-contain w-full lg:fixed -z-50"
          alt="Background"
        />

      <div className="lg:w-[90vw] mx-auto">
        <div className="lg:h-[80vh] h-0"></div>

        <div className="lg:sticky lg:z-10 lg:top-20 lg:pt-20 rounded-t-3xl">
          <div className="lg:h-[90vh] lg:overflow-y-auto bg-[#FFFFFF] rounded-t-3xl lg:z-10">
            <History/>
            <Slider/>
            <Vision/>
            <Roadcom/>
            <Token/>
            <Merchandise/>
            <Game/>
            <Social/>
          </div>
        </div>
      </div>
    </div>
  );
}
