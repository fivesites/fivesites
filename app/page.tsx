import HeroOriginStory from "@/components/HeroOriginStory";

export default function Home() {
  return (
    <main className=" w-full ">
      <HeroOriginStory />

      <div className="fixed z-20 bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </main>
  );
}
