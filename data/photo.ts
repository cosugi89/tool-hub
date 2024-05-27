import { Tag } from "@/types/tag";

export const photos: {
  imageURL: string;
  href: string;
  title: string;
  tags: Tag[];
}[] = [
  {
    imageURL:
      "https://pbs.twimg.com/media/GObyifNaMAALFwo?format=jpg&name=large",
    href: "https://www.irasutoya.com/",
    title: "いらすとや",
    tags: [
      {
        id: "xxx",
        label: "ライセンス表記不要",
      },
    ],
  },
  {
    imageURL:
      "https://pbs.twimg.com/media/GObyifNaMAALFwo?format=jpg&name=large",
    href: "https://pixabay.com/ja/",
    title: "Pixabay",
    tags: [
      {
        id: "xxx",
        label: "表記不要",
      },
    ],
  },
  {
    imageURL: "/images/unsplash",
    href: "https://unsplash.com/ja",
    title: "Unsplash",
    tags: [
      {
        id: "xxx",
        label: "ライセンス表記不要",
      },
    ],
  },
];
