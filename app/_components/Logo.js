import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" alt="The Wild Oasis" width={60} height={60} />
    </Link>
  );
};

export default Logo;
