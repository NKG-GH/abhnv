import { faArrowAltDown } from "@awesome.me/kit-a7b37e0159/icons/classic/light";

import "@src/features/bg/gradient-bg.css";

import Typography from "@src/components/common/text/typography";
import IconButton from "@src/components/common/button/icon";
import PerspectiveText from "@lib/gsap/components/perspective-text";

export default function Home() {
  return (
    <main className="font-bellefair flex min-h-screen w-full flex-col items-center justify-between pt-48 font-sans text-white">
      <div className="flex flex-col items-center">
        <div className="mt-12 w-full text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
          <PerspectiveText
            as="h1"
            serif
            weight="thin"
            case="upper"
            align="center"
          >
            <span className="gradient-bg animate-bg clip-text-bg">ABHNV</span>
          </PerspectiveText>
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
      </div>
      <div className="mb-12 flex flex-col items-center gap-2">
        <Typography
          as="p"
          className="pointer-events-none text-xs text-neutral-300"
          tracking={5}
        >
          SCROLL
        </Typography>
        <IconButton
          as="a"
          href="#summary"
          iconProps={{ icon: faArrowAltDown }}
          className="animate-bounce text-xl"
        />
      </div>
    </main>
  );
}
