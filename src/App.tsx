import Header from "./components/Header.tsx";
import Projects from "./components/Projects.tsx";
import {BackgroundGradientAnimation} from "./components/ui/background-gradient-animation.tsx";
export default function HomePage() {
  return (
    <div className=" text-white min-h-screen relative">
      <div className="fixed z-0">
        <BackgroundGradientAnimation
          className="z-0"
          gradientBackgroundStart="rgb(0, 0, 0)"
          gradientBackgroundEnd="rgb(10, 10, 25)"
          pointerColor="160, 160, 160"
          size="80%"
          firstColor="none"
          secondColor="none"
          thirdColor="160, 160, 160"
          fourthColor="none"
          fifthColor="none"
          blendingValue="screen"
        ></BackgroundGradientAnimation>
      </div>
      <div className="relative z-10">
        <Header />
        <Projects />
      </div>
    </div>
  );
}
