import { Tag } from "@/types/tag";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  title,
  tags,
  href,
  imageURL,
}: {
  title: string;
  tags: Tag[];
  href: string;
  imageURL: string;
}) {
  return (
    <div className=" hover:shadow-lg aspect-video relative border rounded-md shadow-sm bg-card p-4 transition duration-500">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded">
        <Image fill objectFit="cover" src={imageURL} alt="" />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative z-10 mt-2 gap-2 flex-wrap">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`${tag.id}`}
            className="border whitespace-nowrap bg-muted rounded text-sm px-1 py-0.5"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
