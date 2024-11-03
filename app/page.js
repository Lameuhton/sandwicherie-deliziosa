import Hero from "./components/home/Hero";
import Section1 from "./components/home/Section1";
import Section2 from "./components/home/Section2";
import Section3 from "./components/home/Section3";

export default function Home() {
  return (
    <main className="w-full bg-[#212121] ">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
