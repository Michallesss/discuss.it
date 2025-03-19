import Footer from "@/components/Footer";
import Post from "./_components/Post";

export default function HomePage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our School</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and
              connect with the needs of your audience early and often.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <Post id="1" date={new Date()} title="Title 1" content="lorem ipsum perpetum mobilus niggus" author="author 1" />
            <Post id="2" date={new Date("2025-03-12T03:24:00")} title="Title 2" content="Pubge ili forenite" author="author 2" />
            <Post id="3" date={new Date("2025-03-18T03:24:00")} title="Title 3" content="lorem ipsum perpet" author="author 3" />
            <Post id="4" date={new Date("2025-02-18T03:24:00")} title="Title 4" content="lorem ipsum perpet lorerum bddsaweq" author="author 4" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
