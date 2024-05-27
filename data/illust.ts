import { Tag } from "@/types/tag";

export const illusts: {
  imageURL: string;
  href: string;
  title: string;
  tags: Tag[];
}[] = [
  {
    imageURL:
      "https://pbs.twimg.com/media/GObyifNaMAALFwo?format=jpg&name=large",
    href: "https://www.irasutoya.com/",
    title: "いら",
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
    href: "https://www.irasutoya.com/",
    title: "すとや",
    tags: [
      {
        id: "xxx",
        label: "ラス表記不要",
      },
    ],
  },
];
