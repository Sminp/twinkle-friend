import { ArrowLeft } from "@/constants/image";
import Image from "next/image";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content-area px-7">
      <div className="w-full py-3 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-6 h-6 relative overflow-hidden">
            <Link href="/" className="cursor-pointer">
              <Image
                className="w-1.5 h-3 left-[9px] top-[6px] absolute "
                width={6}
                height={12}
                src={ArrowLeft}
                alt="<"
              />
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
