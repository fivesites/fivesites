import BottomNav from "@/components/BottomNav";
import CookieConsent from "@/components/CookieConsent";
import HeroOriginStory from "@/components/HeroOriginStory";

export default function Home() {
  return (
    <main className=" w-full ">
      <HeroOriginStory />
      <BottomNav />
      <CookieConsent />
    </main>
  );
}
