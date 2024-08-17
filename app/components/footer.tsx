import { Button } from "@/components/ui/button";
import { menuLinks, otherLinks } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 border-t sticky top-full lg:hidden">
      <p className="text-center mb-4">
        『転生したらスライムだった件』のファンによる、ファンのためのコミュニティサイト
      </p>
      <div className="flex justify-center space-x-1 mb-4">
        {menuLinks.map((links) => (
          <Button key={links.id} variant="ghost" asChild>
            <Link href={`/${links.id}`}>{links.label}</Link>
          </Button>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        {otherLinks.map((links) => (
          <Button
            key={links.id}
            variant="outline"
            className="rounded-full w-14 h-14"
            asChild
          >
            <Link href={links.link} target="_blank">
              <Image
                src={links.icon}
                alt={`${links.label} icon`}
                width={24}
                height={24}
              />
            </Link>
          </Button>
        ))}
      </div>
      <p className="text-center text-sm mt-4">
        &copy; 2024 スライム転生Wiki. All rights reserved.
      </p>
    </footer>
  );
}
