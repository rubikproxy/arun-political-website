import type { SVGProps } from "react";
import { Hand } from "lucide-react";
import Image from "next/image";

export const Icons = {
  IncLogo: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <Image
      src="https://manifesto.inc.in/images/nextImageExportOptimizer/inc-logo-with-name-opt-1920.WEBP"
      alt="Indian National Congress Logo"
      width={1920}
      height={1080}
      {...props}
      className={`${props.className}`}
    />
  ),
  hand: Hand,
};
