import Typography from "@src/components/common/text/typography";

export default function Home() {
  return (
    <main className="font-bellefair flex w-full flex-col items-center pt-48 font-sans text-white">
      <div className="gradient-bg animate-bg clip-text-bg mt-12 w-full text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
        <Typography serif weight="thin" case="upper" align="center">
          ABHNV
        </Typography>
      </div>
      <div className="w-full text-lg text-neutral-300/75 md:text-xl lg:text-2xl">
        <Typography
          as="h3"
          weight="thin"
          tracking={20}
          case="upper"
          align="center"
        >
          Abhinav Kargupta
        </Typography>
      </div>
      <div className="mt-12 w-[250px] text-2xl text-neutral-100/75 md:w-[450px] md:text-3xl lg:text-4xl">
        <Typography as="h2" weight="light" align="center">
          FRONTEND SOFTWARE DEVELOPER
        </Typography>
      </div>
    </main>
  );
}
