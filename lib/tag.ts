import { allTags, mainTags, TagId } from "@/data/tag";

export const getTagLabel = (tagId: TagId) => {
  return allTags.find((tag) => tag.name === tagId)?.label ?? "";
};

export const getTagSubLabel = (tagId: TagId) => {
  return allTags.find((tag) => tag.name === tagId)?.subLabel ?? "";
};

export const addTagToSearchParams = (defaultTags: TagId[], tag: TagId) => {
  const src = defaultTags.filter((t: TagId) => !mainTags.includes(t));

  if (src.includes(tag)) {
    return src.join(",");
  } else {
    return [...src, tag].join(",");
  }
};

export const removeTagToSearchParams = (defaultTags: TagId[], tag: TagId) => {
  return defaultTags.filter((t: TagId) => t !== tag).join(",");
};
