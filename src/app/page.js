import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChoosUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
    </div>
  );
}
