import { Button } from "../ui/button";

export default function HeroSection3() {
  return (
    <section className="snap-start grid grid-cols-1 lg:grid-cols-2 px-2 pt-4 text-2xl  space-y-4 mb-4 h-screen lg:min-h-[50vh] w-full">
      <div className="col-span-1 lg:col-span-2 col-start-1  flex flex-col justify-between pb-4 lg:pb-2">
        <h2 className="indent-12 md:max-w-xl">
          The projects will be published continously. For updates, sign up for
          our newsletter
          <Button variant="link" size="linkSize" className="ml-1">
            here
          </Button>
        </h2>

        <h2 className=" indent-12 md:max-w-xl uppercase fivesites-logo text-4xl">
          /five sites team
        </h2>
      </div>
    </section>
  );
}
