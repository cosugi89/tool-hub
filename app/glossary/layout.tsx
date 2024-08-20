import Image from "next/image";
import Filter from "./components/filter";

export default function GlossaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="relative w-full border-b">
        <div className="border-b aspect-[5/2] lg:aspect-[6/1]">
          <Image
            src="/rimuru.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col font-medium">
          <div className="text-4xl">Glossary</div>
          <div className="text-muted-foreground text-base ml-3 font-semibold">
            用語集
          </div>
          <div></div>
        </div>
      </section>
      <div className="flex flex-1 w-[90%] mx-auto p-4">
        <div className="mr-8 hidden lg:block w-64">
          <Filter />
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </>
  );
}
