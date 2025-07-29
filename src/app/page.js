import Image from "next/image";
import HeaderSection from "./components/HeaderSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto ">
      <HeaderSection />
    </main>
  );
}
