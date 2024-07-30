import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/notion.svg" alt="Logo" width={40} height={40} />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
}
