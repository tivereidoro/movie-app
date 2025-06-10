import Image from "next/image";
import mainLogo from "@/public/logo.svg";

/**
 * @MainLogo
 * @returns an Image component with
 * the viablestack main logo
 */
export default function MainLogo() {
  return (
    <Image
      src={mainLogo}
      width={150}
      height={10}
      alt="viablestack logo"
      className="flex"
    />
  );
}
