import { MenuLinks, OtherLink } from "@/types/links";

export const menuLinks: MenuLinks[] = [
  { label: "GLOSSARY", id: "glossary" },
  { label: "ARTICLES", id: "article" },
  { label: "QUIZ", id: "quiz" },
  { label: "ABOUT", id: "about" },
];

export const otherLinks: OtherLink[] = [
  {
    label: "YouTube",
    id: "youtube",
    link: "https://www.youtube.com/@co_sugi",
    icon: "/youtube_icon_dark.svg",
  },
  {
    label: "Twitter",
    id: "twitter",
    link: "https://x.com/CO_sugi_",
    icon: "/x_icon_dark.svg",
  },
];
