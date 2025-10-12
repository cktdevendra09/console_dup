import Image from "next/image";
import CarouselUi from "./components/carousel/CarouselUi";
import HeroSection from "./components/hero/HeroSection";
import ProfileCard from "./components/card/ProfileCard";
import TopicCardUi from "./components/card/TopicCardUi";
import DoubtsCardUI from "./components/card/DoubtsCardUI";
import CodeContest from "./components/card/CodeContestUI";
import CodeContestUI from "./components/card/CodeContestUI";

export default function WebIndex() {
  return (
    <>
    <HeroSection />
    <h1 className="text-2xl font-bold p-6">PORTFOLIO</h1>
    <ProfileCard />
    <h1 className="text-2xl font-bold p-6">TOPIC</h1>
    <TopicCardUi />

    <h1 className="text-2xl font-bold p-6">Doubts</h1>
    <DoubtsCardUI />

    <h1 className="text-2xl font-bold p-6">Code Contest</h1>
    <CodeContestUI />
    

    </>
   
  );
}
