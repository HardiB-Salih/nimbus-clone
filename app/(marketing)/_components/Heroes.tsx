import Image from "next/image";

interface HeroesProps {}

export default function Heroes({}: HeroesProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/oc-thinking.svg"
            fill
            alt="Thinking"
            className="object-contain dark:hidden"
          />
          <Image
            src="/oc-thinking-dark.svg"
            fill
            alt="Thinking"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/oc-growing.svg"
            fill
            alt="growing"
            className="object-contain dark:hidden"
          />
          <Image
            src="/oc-growing-dark.svg"
            fill
            alt="growing"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}
